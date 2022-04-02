# Understanding the formats
The following articles require some understanding of two main things; .NET Assemblies, and Unity
Asset Bundles. This article will explain what you need to know about them so you can later
understand what we're working with.

## .NET Assemblies
.NET Assemblies (commonly .dll files) is the file which contains the code for the game, or even
your mods. When you write code in C# and click 'build', your code gets compiled into a dll file
which is a more computer efficient way of storing your code so that it can be run later.
Importantly though, during this process, your code translated from the C# that you wrote it in
to another language called IL, and the compiler has very likely applied some optimizations to
your code. This IL requires much less processing to run, and combined with the optimizations
that makes it faster, but there is no way to get back the original C# code that you originally
wrote from just this DLL alone.

Using a _de_-compiler such as dnSpy you can make an attempt are reversing this process but _it
is not perfect_. For simpler bits of code it may produce the same output as the original input
but in larger projects that will certainly not be the case, and often some of the optimizations
that the compiler applies _cannot_ be automatically reversed by the tool _at all_. In the case
of this game, the decompiled code exported to a C# project will not compile. This is fine if 
all you want to do is read the game's code to understand what it is doing though, which is a
very useful tool for modding.

## Unity Asset bundles

When you build an asset bundle with Unity (or when a tool does it for you), Unity packages up
all of your objects, all objects that those objects reference, and every single asset that any
of those objects use. Textures, materials, shaders, etc etc. One thing it does not include
however is any scripts you may have written or applied to objects in the bundle, those are
stored in the compiled assembly of your game. 

For each script that gets used on the objects that Unity includes in any bundle, Unity includes
a special type of asset used internally and then the objects all point at that as the reference
to which script they need. This special asset contains just two bits of data; the name of the
assembly that the script is contained in, and then the name of the script itself. 

So as an example, if you place a .cs script in your project named MyCustomScript and export a
bundle containing an object which uses that script, that bundle will contain one of these special
assets that contains the name of the assembly of the script (`Assembly-CSharp.dll`) and the name
of the script (`MyCustomScript`). Those two pieces of data together uniquely identify any script
that you may want to find later.

## What you need to remember
- Compiling code is not perfectly reversible, decompiled code will likely have errors and will not be re-compilable.
- Unity Asset bundles store references to scripts on objects by the name of the assembly that contains them, alongside the name of the script itself.

With that out of the way, you can continue to the first article about MeatKit: [Importing the game](./3_importing.md).
