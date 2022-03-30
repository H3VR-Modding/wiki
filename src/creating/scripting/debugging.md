# Debugging code plugins

## Debugging Symbols

Debugging symbols is a file that you place right next to your dll which contains extra debugging information about your code. With it, any exceptions that get thrown will not only contain the callstack of how it got to where the error happened, but also source code filenames and line numbers to help you track down the exact line where it happened.

Getting this setup is quite straightforward;

First, you need to enable the generation of the debugging symbols for your project. For new-style .csproj projects, this can be achieved by placing `<DebugType>Full</DebugType>` in your .csproj. After running a build, check your output folder and you should see a .pdb file generated with the same name as your dll.

Unity uses an open-source version of the .NET Runtime called Mono, and Mono uses a similar but not exactly the same symbols file format. For this reason we will need to convert the generated .pdb file of your compiled code to the .mdb that Unity expects. So, download [this pdb2mdb tool](https://gist.github.com/jbevain/ba23149da8369e4a966f/raw/36b3cdd4dd149ab966bbb48141ef8ee2d37c890f/pdb2mdb.exe) and place it inside your build output folder beside your compiled dll. To convert, simple drag and drop your dll onto the tool, it will convert it and the pdb to the mdb file.

Once you have the mdb file you can copy your dll and mdb to your bepinex plugins folder and Unity will load the debugging symbols alongside your plugin.

## Full debugging

If you want that full debugging experience with breakpoints, locals, and code stepping, this can be achieved with dnSpy and a single patched file for your game. First, download [the latest version of dnSpy](https://github.com/dnSpyEx/dnSpy/releases) if you don't already have it. Next, you'll need the patched file for your game which can be found [in this download](https://pixeldrain.com/l/6ceqkTSn#item=3).

Once you have both of these downloaded, extract the `Unity-debugging-5.x.zip` and inside you will find a bunch of folders for different versions of Unity. Inside the Unity 5.6.3 folder there will be a single file, `mono.dll`. Copy that file, and _overwrite_ the `mono.dll` of H3VR's files located at `h3vr_Data/Mono/mono.dll`. 

Next, open up dnSpy and launch H3VR. If the above step was done correctly, you will be able to attach dnSpy as a debugger to the game by selecting `Debug > Start Debugging...` and in the popup changing `.NET Framework` to `Unity (Connect)`. Leave the IP Address field blank and the port at 55555, then click OK. Along the bottom of dnSpy's window now there should be a tab named 'Modules'. Click that and locate the dll you wish to debug code from. This can be your own, or even the game's DLL. Double click on it to add it to the list of open files in dnSpy and from there you can search for the code you want to break at.