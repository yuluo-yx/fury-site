---
title: Scala Serialization Guide
sidebar_position: 4
id: scala_guide
---

# Scala serialization
Fury supports all scala object serialization:
- `case` class serialization supported
- `pojo/bean` class serialization supported
- `object` singleton serialization supported
- `collection` serialization supported
- other types such as `tuple/either` and basic types are all supported too.

Scala 2 and 3 are both supported.

## Install
```sbt
libraryDependencies += "org.apache.fury" % "fury-core" % "0.7.0"
```

## Fury creation
When using fury for scala serialization, you should create fury at least with following options:
```scala
val fury = Fury.builder()
  .withScalaOptimizationEnabled(true)
  .requireClassRegistration(true)
  .withRefTracking(true)
  .build()
```
Depending on the object types you serialize, you may need to register some scala internal types:
```scala
fury.register(Class.forName("scala.collection.generic.DefaultSerializationProxy"))
fury.register(Class.forName("scala.Enumeration.Val"))
```
If you want to avoid such registration, you can disable class registration by `FuryBuilder#requireClassRegistration(false)`.
Note that this option allow to deserialize objects unknown types, more flexible but may be insecure if the classes contains malicious code.

And circular references are common in scala, `Reference tracking` should be enabled by `FuryBuilder#withRefTracking(true)`. If you don't enable reference tracking, [StackOverflowError](https://github.com/apache/fury/issues/1032) may happen for some scala versions when serializing scala Enumeration.

Note that fury instance should be shared between multiple serialization, the creation of fury instance is not cheap.

If you use shared fury instance across multiple threads, you should create `ThreadSafeFury` instead by `FuryBuilder#buildThreadSafeFury()` instead.

## Serialize case object
```scala
case class Person(github: String, age: Int, id: Long)
val p = Person("https://github.com/chaokunyang", 18, 1)
println(fury.deserialize(fury.serialize(p)))
println(fury.deserializeJavaObject(fury.serializeJavaObject(p)))
```

## Serialize pojo
```scala
class Foo(f1: Int, f2: String) {
  override def toString: String = s"Foo($f1, $f2)"
}
println(fury.deserialize(fury.serialize(Foo(1, "chaokunyang"))))
```

## Serialize object singleton
```scala
object singleton {
}
val o1 = fury.deserialize(fury.serialize(singleton))
val o2 = fury.deserialize(fury.serialize(singleton))
println(o1 == o2)
```

## Serialize collection
```scala
val seq = Seq(1,2)
val list = List("a", "b")
val map = Map("a" -> 1, "b" -> 2)
println(fury.deserialize(fury.serialize(seq)))
println(fury.deserialize(fury.serialize(list)))
println(fury.deserialize(fury.serialize(map)))
```

## Serialize Tuple
```scala
val tuple = Tuple2(100, 10000L)
println(fury.deserialize(fury.serialize(tuple)))
val tuple = Tuple4(100, 10000L, 10000L, "str")
println(fury.deserialize(fury.serialize(tuple)))
```

## Serialize Enum
### Scala3 Enum
```scala
enum Color { case Red, Green, Blue }
println(fury.deserialize(fury.serialize(Color.Green)))
```
### Scala2 Enum
```scala
object ColorEnum extends Enumeration {
  type ColorEnum = Value
  val Red, Green, Blue = Value
}
println(fury.deserialize(fury.serialize(ColorEnum.Green)))
```

## Serialize Option
```scala
val opt: Option[Long] = Some(100)
println(fury.deserialize(fury.serialize(opt)))
val opt1: Option[Long] = None
println(fury.deserialize(fury.serialize(opt1)))
```

# Performance
Scala `pojo/bean/case/object` are supported by fury jit well, the performance is as good as fury java.

Scala collections and generics doesn't follow java collection framework, and is not fully integrated with Fury JIT in current release version. The performance won't be as good as fury collections serialization for java.

The execution for scala collections will invoke Java serialization API `writeObject/readObject/writeReplace/readResolve/readObjectNoData/Externalizable` with fury `ObjectStream` implementation. Although `org.apache.fury.serializer.ObjectStreamSerializer` is much faster than JDK `ObjectOutputStream/ObjectInputStream`, but it still doesn't know how use scala collection generics.

In future we plan to provide more optimization for scala types, see https://github.com/apache/fury/issues/682, stay tuned!

Scala collections serialization is finished in https://github.com/apache/fury/pull/1073, if you want better performance, please use fury snapshot version.
