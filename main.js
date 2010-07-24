/*#########################################################################
#                                                                         #
#   Simple script shamelessly recopied from:                              #
#                                                                         #
#   Copyright                                                             #
#                                                                         #
#   (C)  2010 Anselmo Lacerda Silveira de Melo <anselmolsm@gmail.com>     #
#   (C)  2010 Emile de Weerd <mederel+radionederland@gmail.com>           #
#   (C)  2009 Àlvar Cuevas i Fajardo <alvar@cuevas.cat>                   #
#   (C)  2008 Eirik Johansen Bjørgan  <eirikjbj@gmail.com>                #
#   (C)  2007, 2008 Nikolaj Hald Nielsen  <nhnFreespirit@gmail.com>       #
#   (C)  2008 Peter ZHOU <peterzhoulei@gmail.com>                         #
#   (C)  2008 Mark Kretschmann <kretschmann@kde.org>                      #
#                                                                         #
#   This program is free software; you can redistribute it and/or modify  #
#   it under the terms of the GNU General Public License as published by  #
#   the Free Software Foundation; either version 2 of the License, or     #
#   (at your option) any later version.                                   #
#                                                                         #
#   This program is distributed in the hope that it will be useful,       #
#   but WITHOUT ANY WARRANTY; without even the implied warranty of        #
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         #
#   GNU General Public License for more details.                          #
#                                                                         #
#   You should have received a copy of the GNU General Public License     #
#   along with this program; if not, write to the                         #
#   Free Software Foundation, Inc.,                                       #
#   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.         #
##########################################################################*/

Importer.loadQtBinding("qt.core");
Importer.loadQtBinding("qt.gui");

function Station( name, url )
{
    this.name = name;
    this.url = url;
    }

categories = new Object;

categories["  Bla"]= new Array(
    new Station( "Kiss FM", "http://75.126.86.2:8098/" ),
    new Station( "CBN SP", "http://wm-sgr-live.globo.com/sgr_off_cbnfmsp_live.wma" )
)

function BrazilianRadios()
{
    ScriptableServiceScript.call( this, "Brazilian Radios", 2, "List of many Portuguese-speaking radios", "Radio directly from the Brazil", true);
    Amarok.debug( "ok." );
}


function onConfigure()
{
    Amarok.alert( "This script does not require configuring." );
}

function onPopulating( level, callbackData, filter )
{
	// For some reason Amarok appends a "%20", remove it
	filter = filter.toLowerCase().replace("%20","");
	
	if ( level == 1 ) 
	{
		for( att in categories )
		{
			if(filter.length > 0)
			{
				var hasItems = false;
				var stationArray = categories[att];
				for ( i = 0; i < stationArray.length; i++ )
				{
					if(stationArray[i].name.toLowerCase().indexOf(filter) != -1)
					{
						hasItems = true;
						break;
					}
				}
				if(!hasItems) continue;
			}
			
			var cover = Amarok.Info.scriptPath() + "/" + "radio.png";
			Amarok.debug ("att: " + att + ", " + categories[att].name);
	
			item = Amarok.StreamItem;
			item.level = 1;
			item.callbackData = att;
			item.itemName = att;
			item.playableUrl = "";
			item.infoHtml = "";
			item.coverUrl = cover;
			script.insertItem( item );

		}
		script.donePopulating();
	}
	else if ( level == 0 ) 
	{
		Amarok.debug( " Populating station level..." );
		//add the station streams as leaf nodes

		var stationArray = categories[callbackData];

		for ( i = 0; i < stationArray.length; i++ )
		{
			name = stationArray[i].name;
			if(name.toLowerCase().indexOf(filter) == -1) continue;
			item = Amarok.StreamItem;
			item.level = 0;
			item.callbackData = "";
			item.itemName = stationArray[i].name;
			item.playableUrl = stationArray[i].url;
			item.album = stationArray[i].name;
							item.artist = "Radio Stream";
							item.coverUrl = cover;
			script.insertItem( item );
		}
		script.donePopulating();
	}
}

function onCustomize() {
    var currentDir = Amarok.Info.scriptPath() + "/";
    var iconPixmap = new QPixmap(currentDir+"icon.png");
    script.setIcon(iconPixmap);
}

Amarok.configured.connect( onConfigure );

script = new BrazilianRadios();
script.populate.connect( onPopulating );
script.customize.connect( onCustomize );
