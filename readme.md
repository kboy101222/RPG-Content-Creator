# RPG Content Creator

Preview here: https://kboy101222.github.io/RPG-Content-Creator/

The RPG Content Creator is an Open Source website for creating and editting Homebrew content for various RPG systems.

For now, only Fifth Edition Dungeons and Dragons is supported, but support for other systems is planned for the future.

The following custom content creators are **complete**:

* None

The following are in **beta stages**:

* Item Creator (D&D 5e)
* Class Creator (D&D 5e)

The following are **planned** (in order of planned implementation):

* Archetypes (D&D 5e)
* Races (D&D 5e)
* Sub Races (D&D 5e)

(Content creators for other systems such as D&D 3.5 are not yet planned due to my unfamiliarity with the system)

For D&D 5e, Classes, Archetypes, Races, and Sub Races will all be exportable into the ["Fifth Edition Character Sheet" app](https://play.google.com/store/apps/details?id=com.wgkammerer.testgui.basiccharactersheet.app) [(iOS Link)](https://itunes.apple.com/us/app/fifth-edition-character-sheet/id967650851?mt=8), and all D&D 5e creators will be exportable into the ["Complete Reference for DnD 5" app](https://play.google.com/store/apps/details?id=com.vansteinengroentjes.apps.ddfive) [(iOS Link)](https://itunes.apple.com/us/app/complete-reference-for-d-d-5/id1225927257?mt=8)

## Planned Features

* Support additional RPG systems
* Importing and exporting custom content so it can be modified by others

## Current TODO List (in no particular order)

* Add exporting items to "Complete Refernece for DnD 5" app
* Add all the level up effects for classes
* Add disability support
    * Screen readers, colorblind modes, etc
    * This will probably be done late since I've never done it before
* Dark Theme
    * ~~Able to toggle between light and dark themes~~ Done!
    * Keep track of the chosen theme between reloads
    * More themes (?)
    
## Known Bugs

* If you edit an item and save your changes, you can no longer open the item editor
* The export menu has no animation and opens rather jarringly
* ~~A lot of the text is white on a white background~~

## Notice

This project is Open Source and free to use, modify, and distribute, so long as you give credit to me, Kyle George, and as long as you don't charge money for it.

## Update Log

**Alpha 2**  
* Added bootstrap-darkly theme switch  

**Alpha 2.1**  
* Removed bootstrap-darkly theme switch  
* ~~Added the first version of the custom "Magical Scroll Theme"~~
* Added "View this project on GitHub" link  

**Alpha 2.1.1**  
* Removed the "Magic Scroll" Theme because it was bad...

**Alpha 3 (Coming Soon)**  
* Added exporting to *Complete Reference for DnD 5*  
    
## Notes on exporting to *Complete Reference for DnD 5*

In order to import the content into the app, you must upload it to the [Complete Reference Forums](https://complete-reference.com) and import it through the app.

If the chosen ID number for the item conflicts with another ID, the previous item will be overwritten, so choose a long, random number.

Both of these problems are unavoidable on my end, sorry.

## Additional Software Used:

* Brackets (For coding)
* jquery (For making a lot of the coding easier)
* Bootstrap 4 (Because I'm a terrible graphical designer)
* Cookies.js (Because it makes Cookies easier, which I need because I can't afford a server)
* TiTaToggle (For fancy toggle switches)