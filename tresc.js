function pokazJednaSzczeline(){
	obszar=document.getElementById('obszar');
	var tresc = `
	<article>
	<h2>
		Program pierwszy: jedna szczelina
	</h2>
	<p>
		Pierwszy program pozwala na zobaczenie obrazu tworzonego na wskutek dyfrakcji fali przechodzącej przez szczelinę o rozmiarze porównywamym do długości fali. 
		Zarówno przed jak i po rozpoczęciu programu można zmieniać parametry wpływające na obraz powstający na ekranie. W celu dokładnej interpretacji każdego parametru, zapoznaj się z informacjami zawartymi w zakładce: "Sposób działania".
	</p>
	<p>
		Aby rozpocząć symulację, naciśnij przycisk: start.
	</p>

	<form name = "formularz">
	<table id="pierwsza">
	<tr>
		<th>Wielkosc szczeliny [a]</th>
		<th>Dlugosc fali [λ]</th>
		<th>Odleglosc od ekranu [L]</th>
	</tr>
	<tr>
		<td>
			<input type="range" onchange="drawEverything(); updateTextA(this.value);" name="szczelina" min="2" max = "24">
			<br>
			<pre>1[μm]             12[μm]</pre>
		</td>
		<td><input type="range" onchange="drawEverything(); updateTextLamb(this.value);" name="lambda" min="380" max = "760">
		<br>
		<img src="wavelenght.png" alt="Tu miala byc skala :|" id="wavelenght"></td>
		<td><input type="range" onchange="drawEverything(); updateTextEkran(this.value);" name="L" min="50" max = "75">
		<br>
		<pre>1.5[m]             2[m]</pre>
		</td>
	</tr>
	<tr>
		<td><input type="text" id="a" readonly value="a = 6.5[μm]"></td>
		<td><input type="text" id="lamb" readonly value="λ = 570[nm]" ></td>
		<td><input type="text" id="ekran" readonly value="L = 1.75[m]"></td>
	</tr>

	</table>
	<br>
	<input type="button" onclick="startAnimation()" value="START">
	</form>

	<canvas id="Dyfrakcja">
		
	</canvas>
	</article>
	`;
	obszar.innerHTML = tresc;
}
function pokazStroneGlowna()
{
	obszar=document.getElementById('obszar');
	var tresc = `
	<article>
		<h2>Informacje ogólne</h2>
		<p>
			Strona ta została stworzona w celu opisania i zaprezentowania zjawiska
			dyfrakcji na pojedynczej szczelinie, oraz interferencji, na dwoch szczelinach.
		</p>
		<h3>
			Dyfrakcja
		</h3>
		<video width="600" height="400" controls>
  			<source src="Diffraction.mp4" type="video/mp4">
  			W tej przeglądarce nie możesz oglądać elementu video.
  		</video>
  		<p display="block">Żródło: Yuotube:expertmathstutor</p>
		<p>
			Dyfrakcja (ugięcie fali) – zespół zjawisk związanych ze zmianą kierunku rozchodzenia się fali będący odstępstwem od praw optyki geometrycznej. Dyfrakcję w węższym znaczeniu określa się jako ugięcie światła wokół krawędzi przeszkody lub otworu w obszarze cienia przeszkody.
		</p>
		<p>
			Dyfrakcja występuje dla każdej fali o amplitudzie zmieniającej się w kierunku prostopadłym do jej biegu (np. dyfrakcyjna rozbieżność wiązki światła). Efekty dyfrakcji są wyraźnie widoczne, gdy fala napotyka przeszkodę lub szczelinę, która jest porównywalna wielkością do długości fali.
		</p>
		<h3>
			Interferencja
		</h3>
		<p>
			To zjawisko powstawania nowego, przestrzennego rozkładu amplitudy fali (wzmocnienia i wygaszenia) w wyniku nakładania się (superpozycji fal) dwóch lub więcej fal. Warunkiem trwałej interferencji fal jest ich spójność, czyli korelacja faz i równość częstotliwości.
		</p>
		

	</article>
	`;
	obszar.innerHTML = tresc;
}

function pokazReadme()
{
	obszar=document.getElementById('obszar');
	var tresc = `
		<article>
		<h2>Symulacja 1  - jedna szczelina</h2>
		<p>
			W ramach projektu stworzyłem dwie symulacje dyfrakcji fal elektromagnetycznych w zakresie widzialnym ludzkim okiem. Symulacja przedstawia fale padające na szczeline, zaginanie się tych fal, oraz obraz wytworzony na ekranie. Za ekranem narysowane jest też natężenie w funkcji kąta. Pierwsza symulacja odbywa się na jednej szczelinie, w ramach symulacji można zmieniać wartości trzech kluczowych parametrów: 

		</p>
			<table id="parametry">
				<tr><th>Szerokosc szczeliny (a)</th><td>Określa szerokość szczeliny.  </td><td>Dla wartości minimalnej zachodząca dyfrakcja jest największa, dla maksymalnej zaginanie fal zaczyna być prawie niewidoczne.</td></tr>
				<tr><th>Długość fali (λ)</th><td>Wielkość fizyczna określająca barwę fali elektromagnetycznej(w zakresie fal widzialnych).</td><td>W symulacji, im mniejsza długość fali, tym więcej "prążków" pojawia się na ekranie. Oprócz tego, zmienia się oczywiście widoczny kolor fal.</td></tr>
				<tr><th>Odległość szczeliny od ekranu (L)</th><td>Określa jak daleką drogę zagięta fala musi pokonać przed ekranem.</td><td>W symulacji, im mniejsza odległość, tym większy zakres zagiętej fali widoczny jest na ekranie.</td></tr>
			</table>
		<p>
			Fale widczne na symulacji są tylko poglądowe. W rzeczywistości długość fali jest zbyt mała by przedstawić ją w poprawnej skali względem reszty rysunku. To samo tyczy się szerokości szczeliny, biorąc pod uwagę odległość szczeliny od ekranu, szczelina stworzona w poprawnej skali nie byłaby widoczna na symulacji. 
		</p>
		<p>
			Parametrem wyznaczanym w symulacji jest natężenie fali, którego funkcja widoczna jest po prawej stronie ekranu. Na jego podstawie wyznaczana jest jasność prążków na ekranie. Wyznaczane ono jest z następujących wzorów:
		</p>
	<math display="block">
	<mrow>
	  <mi>I</mi>
	  <mo>=</mo>
	  <msup>
	  	<mfenced>
	  		<mfrac>
	    		<mrow>
	      			<mi>sinα</mi>
	    		</mrow>
	    		<mrow>
	      			<mi>α</mi>
	    		</mrow>
	  		</mfrac>
	  	</mfenced>
	  <mn>2</mn>
	  </msup>
	</mrow>
	</math>

	<math display="block">
	<mrow>
     <mrow>
		<mi>α</mi>
		<mo>=</mo>
	 </mrow>
	 <mfrac>
	    <mrow>
	      <mo>πa</mo>
	    </mrow>
	    <mrow>
	    	<mo>λ</mo>
	    </mrow>
	 </mfrac>
	 <mo>sinθ</mo>
	</mrow>
	</math>

	<p>
		gdzie: θ to kąt pomiędzy prostą prostopadłą do  ekranu przechodzącą przez środek szczeliny, a prostą przechodzącą przez środek szczeliny i punkt na ekranie, którego natęzenie badamy, a natężenie w maksimum przyjmuję jako 1.
	</p>
	<h2>Symulacja 2 - dyfrakcja na dwóch szczelinach</h2>
	<p>
		Dodanie do symulacji drugiej szczeliny widocznie zmienia jej wyniki, liczba prążków zdecydowanie zwiększa się. Dzieję sie tak na wskutek interferencji fal, czyli wzmacniania i wygaszania fal pochodzących z obu szczelin. Dodatkowym parametrem w tej symulacji jest odległość między szczelinami, od której zależy, czy w danym punkcie ekranu zajdzie wygaszenie czy wzmocnienie natężenia. 
	</p>

	<p>
		Ponownie jak w symulacji pierwszej, fale są tylko poglądowe. Szerokość szczelin zmienia się jako parametr, ale skala jest zbyt mała, żeby zobaczyć to na rysunku. Zmiany natężenia są wyraźnie widoczne na ekranie oraz na wykresie funkcji natężenia od położenia.
	</p>
	<p>
		Wzór na α z symulacji pierwszej jest wykorzystywany w dalszym ciągu. Dochodzi jednak dodatkowy czynnik pochodzący z drugiej szczeliny. Dlatego wzór na natęzenie zmienia się.
	</p>
	<math display="block">
	<mrow>
	  <mi>I</mi>
	  <mo>=</mo>
	  <msup>
	  	<mfenced>
	  		<mfrac>
	    		<mrow>
	      			<mi>sinα</mi>
	    		</mrow>
	    		<mrow>
	      			<mi>α</mi>
	    		</mrow>
	  		</mfrac>
	  	</mfenced>
	  <mn>2</mn>
	  </msup>
	  <msup>
	  	<mfenced>
	  		<mi>cosβ</mi>
	  	</mfenced>
	  	<mn>2</mn>
	  </msup>
	</mrow>
	</math>


	<math display="block">
	<mrow>
     <mrow>
		<mi>β</mi>
		<mo>=</mo>
	 </mrow>
	 <mfrac>
	    <mrow>
	      <mo>πd</mo>
	    </mrow>
	    <mrow>
	    	<mo>λ</mo>
	    </mrow>
	 </mfrac>
	 <mo>sinθ</mo>
	</mrow>
	</math>
	<p>
		Parametr d to właśnie odległość między szczelinami, a natężenie w maksimum przyjmuje 1. 
	</p>

	</article>	
	`;
	obszar.innerHTML = tresc;
}


function pokazDwieSzczeliny()
{
	obszar=document.getElementById('obszar');
	var tresc = `
	<article>
	<h2>
		Program drugi: dwie szczeliny
	</h2>
	<p>
		Drugi projekt także ukazuje dyfrakcję fal elektromagnetycznych na szczelinie, ale z wykorzystaniem dwóch szczelin. Jak łatwo zauważyć, zdecydowanie zmienia to wynik. Dzieje się to na skutek interferencji, czyli algebraicznego nakładania się fal. Szczegóły fizyczne zawarte są w zakładce "Sposób działania". Do wyboru są wszystkie parametry z projektu pierwszego, a dodatkowo odległość między szczelinami(d). Wybór parametrów możliwy jest za pomocą suwaków w tabelce poniżej.
	</p>
	<p>
		Aby rozpocząć symulację, naciśnij przycisk: start.
	</p>

	<form name = "formularz">
	<table>
	<tr>
		<th>Wielkosc szczeliny [a]</th>
		<th>Odleglosc miedzy szczelinami[d]</th>
		<th>Dlugosc fali [λ]</th>
		<th>Odleglosc od ekranu [L]</th>
	</tr>
	<tr>
		<td>
		<input type="range" onchange="drawEverything2(); updateTextA(this.value);" name="szerokosc" min="1" max = "10">
		<br>
		<pre>1[μm]            10[μm]</pre>
		</td>
		<td>
			<input type="range" onchange="drawEverything2(); updateTextD(this.value);" name="szczelina" min="20" max = "40">
			<br>
			<pre>20[μm]           40[μm]</pre>
		</td>
		<td><input type="range" onchange="drawEverything2(); updateTextLamb(this.value);" name="lambda" min="380" max = "760">
		<br>
		<img src="wavelenght.png" alt="Tu miala byc skala :|" id="wavelenght"></td>
		<td><input type="range" onchange="drawEverything2(); updateTextEkran(this.value);" name="L" min="50" max = "75">
		<br>
		<pre>1.5[m]             2[m]</pre>
		</td>
	</tr>
	<tr>
		<td><input type="text" id="a" readonly value="a=5[μm]"></td>
		<td><input type="text" id="d" readonly value="d=20[μm]"></td>
		<td><input type="text" id="lamb" readonly value="λ = 570[nm]" ></td>
		<td><input type="text" id="ekran" readonly value="L=1.75[m]"></td>
	</tr>

	</table>
	<input type="button" id="start" onclick="startAnimation2()" value="START">
	</form>


	<canvas id="Dyfrakcja">
		
	</canvas>

	
	</article>
	`;
	obszar.innerHTML = tresc;
}