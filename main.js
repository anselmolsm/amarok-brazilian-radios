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

categories["  Belo Horizonte"]= new Array(
    new Station( "Band News BH", "http://servidor25.crossdigital.com.br:8000/bandnewsbelohorizonte"),
    new Station( "CBN BH", "http://wm-sgr-live.globo.com/sgr_off_cbnbh_live.wma"),
    new Station( "Guarani FM", "http://cdn.upx.net.br/listen/00108.wmx"),
    new Station( "Antena 1", "mms://wmedialive.telium.com.br/antenaum")
);

categories["  Brasilia"]= new Array(
    new Station( "Band News BSB", "http://servidor25.crossdigital.com.br:8000/bandnewsbrasilia"),
    new Station( "CBN BSB", "http://wm-sgr-live.globo.com/sgr_off_cbnbsb_live.wma"),
    new Station( "Nova Brasil FM", "http://00086.cdn.upx.net.br/listen.wmx")
);

categories["  Campinas"]= new Array(
    new Station( "Nova Brasil FM", "http://00086.cdn.upx.net.br/listen.wmx")
);

categories["  Curitiba"]= new Array(
    new Station( "Band News Curitiba", "http://servidor25.crossdigital.com.br:8000/bandnewscuritiba")
);

categories["  Fortaleza"]= new Array(
    new Station( "Universitária FM", "mms://200.129.35.230:8080/ouvir")
);

categories["  Porto Alegre"]= new Array(
    new Station( "Band News POA", "http://servidor25.crossdigital.com.br:8000/bandnewsportoalegre"),
    new Station( "Ipanema FM", "http://65.60.52.122:8700")
);

categories["  Recife"]= new Array(
    new Station( "Nova Brasil FM", "http://00086.cdn.upx.net.br/listen.wmx")
);

categories["  Rio de Janeiro"]= new Array(
    new Station( "Band News RJ", "http://servidor25.crossdigital.com.br:8000/bandnewsrj"),
    new Station( "CBN RJ", "http://wm-sgr-live.globo.com/sgr_off_cbnfmrj_live.wma"),
    new Station( "Cidade Web Rock", "mms://200.222.115.50/CidadeWebRock_CidadeWebrock128"),
    new Station( "Cidade Classic Rock", "mms://200.222.115.52/CidadeWebRock_ClassicRock?ticket=000001907124&crc=1712891669"),
    new Station( "Cidade Web Metal", "mms://200.222.115.51/CidadeWebRock_Metal?ticket=000001182157&crc=1876042995"),
    new Station( "Cidade Setentona", "mms://200.222.115.51/CidadeWebRock_Setentona?ticket=000000455298&crc=317125137"),
    new Station( "Cidade Oitentona", "mms://200.222.115.51/CidadeWebRock_oitentona128?ticket=000001906707&crc=1047356258"),
    new Station( "Cidade Noventona", "mms://200.222.115.51/CidadeWebRock_noventona?ticket=000001906867&crc=899011349"),
    new Station( "Cidade Drop Rock", "mms://200.222.115.52/CidadeWebRock_DropRock?ticket=000001907575&crc=420644720"),
    new Station( "Cidade Rock Brasil", "mms://200.222.115.50/CidadeWebRock_RockBrasil?ticket=000001908286&crc=1724460576"),
    new Station( "JBFM", "mms://200.222.115.52/OiFM_JBFM")
);


categories["  Sao Paulo"]= new Array(
    new Station( "Backstage Heavy Rock", "http://67.212.166.210:8424"),
    new Station( "Backstage Classic Rock", "http://65.60.52.122:8700"),
    new Station( "Band News SP", "http://servidor25.crossdigital.com.br:8000/bandnewssp"),
    new Station( "Band FM", "http://servidor24.crossdigital.com.br:8000/bandfm"),
    new Station( "Bandeirantes AM", "http://servidor25.crossdigital.com.br:8000/bandeirantesam"),
    new Station( "CBN SP", "http://wm-sgr-live.globo.com/sgr_off_cbnfmsp_live.wma"),
    new Station( "Jovem Pan AM", "mms://p.mm.uol.com.br/ampan"),
    new Station( "Kiss FM", "http://75.126.86.2:8098/"),
    new Station( "Nativa", "http://servidor25.crossdigital.com.br:8000/nativafm"),
    new Station( "Nova Brasil FM", "http://00086.cdn.upx.net.br/listen.wmx"),
    new Station( "Rádio Mitsubishi", "http://servidor24.crossdigital.com.br:8000/mtsubishifm"),
    new Station( "Rádio Trânsito", "http://74.86.203.122:8000/radiotransito")
);

categories["  Salvador"]= new Array(
    new Station( "Band News Salvador", "http://servidor25.crossdigital.com.br:8000/bandnewssalvador"),
    new Station( "Nova Brasil FM", "http://00086.cdn.upx.net.br/listen.wmx")
);

function BrazilianRadios()
{
    ScriptableServiceScript.call( this, "Brazilian Radios", 2, "List of Brazilian radios", "A collection of radios from many cities in Brazil", true);
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
