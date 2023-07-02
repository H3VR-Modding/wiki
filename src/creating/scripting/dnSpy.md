# dnSpy
dnSpy is a tool that lets you view the game's decompiled code. This is often used to explore how systems work, and how you might want to interact with them from your own code. 

You'll want to grab the latest release from this download page: https://github.com/dnSpyEx/dnSpy/releases

## Opening the game's code
After downloading and unzipping dnSpy (it may be double zipped), run the dnSpy executable. Then open the game's assembly by going to File > Open and selecting `H3VR_PATH\h3vr_Data\Managed\Assembly-CSharp.dll`, this will add it to the list of open assemblies on the left. You can expand the tree view to see the contents of the assembly, but there's a lot of them so that's typically not the best way to find things.

## Finding code
Typically if you're using dnSpy your goal is to find and investigate a particular system / piece of code so you can figure out how to best interact with it from your own code. The hard part is often finding that code in the assembly, but there are a few handy tricks you can use to locate it faster.

### Searching
By clicking the search icon in the top next to the start button you can type in some text and dnSpy will show you all sorts of results that match that text. By default, it will search for almost anything; classes, structs, enums, interfaces, etc, but you can change that with the 'Search for:' dropdown. This is useful for initially finding some code to look at.

### Analyzing
When you're looking at some piece of code, you can right click on something and select 'Analyze'. This will focus a menu at the bottom that shows you everywhere that bit of code is being used, which allows you to follow references to related places in the game's code. This can be especially handy when you're somewhere that seems like what you're looking for but not exactly what you want.
