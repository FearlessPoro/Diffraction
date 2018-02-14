var startFlag=0;
var startFlag2 = 0;

function myClear()
{
	var obszar = document.getElementById("Dyfrakcja");
	obszar.width = 600;
	obszar.height = 300;
	var ctx = obszar.getContext("2d");
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0, 440,600);
	ctx.fillStyle = "#ffffff";
	ctx.fillRect(440, 0, 600, 600);

}


function drawStaticElements(){
	var obszar = document.getElementById("Dyfrakcja");


	var ctx = obszar.getContext("2d");
	var szczelina = Number(parseFloat(document.formularz.szczelina.value));
	var ekran = Number(parseFloat(document.formularz.L.value));

	ctx.fillStyle = "#ffffff";
	ctx.fillRect(250 - ekran*2 ,0, 4,600);
	ctx.fillRect(380, 0, 3, 600);

	ctx.fillStyle = "#000000";
	ctx.fillRect(250 - ekran*2, 150 - szczelina, 4, szczelina*2);
	//strzalki
	ctx.fillRect(450, 150, 140, 2);
	ctx.strokeStyle = "#000000"; 
	
	
	ctx.beginPath();
	ctx.moveTo(590, 151);
	ctx.lineTo(580, 141);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(590, 151);
	ctx.lineTo(580, 161);
	ctx.stroke();

	ctx.fillRect(448, 0, 2, 300);
	ctx.fillRect(445, 10, 10, 1);
	ctx.fillRect(445, 290, 10, 1);

	//skala

	ctx.font = "16px Arial";
	ctx.fillText("Natezenie(α)", 500, 14);

	ctx.font = "10px Arial";
	//ctx.fillRect()
	ctx.fillText("-18[cm]", 460, 13);
	ctx.fillText("18[cm]", 460, 294);
	ctx.fillText("0", 440, 150);


}

function sinToCoords(val)
{
	return 450 + 120 * val;
}
function drawWaveAndIntensity()
{
	var obszar = document.getElementById("Dyfrakcja");
	var ctx = obszar.getContext("2d");

	var alpha, I, sin, lastVal, b, c;
	var lambda = Number(parseFloat(document.formularz.lambda.value));
	var colors = wavelengthToColor(lambda);
	var ekran = Number(parseFloat(document.formularz.L.value));

	var szczelina = Number(parseFloat(document.formularz.szczelina.value));

	ctx.fillStyle = colors[0];
	ctx.strokeStyle = colors[0];
	
	ctx.beginPath();
	ctx.moveTo(570, 150);
	c = 1.5 + (ekran*2 - 100)* 0.5/50.;

	for(i=150; i >= 0; i-- )
	{
		b = 0.18 * (1 - (i-10)/140.);
		sin = b/ Math.sqrt( Math.pow( b, 2 )+ Math.pow( c, 2 ) );
		alpha = sin * Math.PI * szczelina*500. / lambda;
		I = Math.pow(Math.sin(alpha) / alpha, 2);
		ctx.lineTo(sinToCoords(I), i);
		I = Math.pow(I, 1/2);
		ctx.fillStyle = rgbToHex(Math.round(colors[1] * I), Math.round(colors[2] * I) , Math.round(colors[3] * I) );
		ctx.fillRect(383, i, 57, 1);

	}
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(570, 150);
	for(i=149; i <= 300; i++ )
	{
		b = 0.18 * (1 - (i-10)/140.);
		sin = b/ Math.sqrt( Math.pow( b, 2 )+ Math.pow( c, 2 ) );
		alpha = sin * Math.PI * szczelina*500. / lambda;
		I = Math.pow(Math.sin(alpha) / alpha, 2);
		
		ctx.lineTo(sinToCoords(I), i);
		I = Math.pow(I, 1/2);
		ctx.fillStyle = rgbToHex(Math.round(colors[1] * I), Math.round(colors[2] * I) , Math.round(colors[3] * I) );
		ctx.fillRect(383, i, 57, 1);

	}
	ctx.stroke();
	lambda/=100;
	ctx.fillStyle = colors[0];



	for(i=4; i<250 - ekran*2-1; i+=8*lambda)
		ctx.fillRect(i,100, 2,100);



	for(i=20; i< 280 -(75-ekran)*2; i+=8*lambda)
	{
		ctx.beginPath();
		ctx.arc(250 - ekran*2, 150-szczelina,  i,  1.75 * Math.PI, 0.25 * Math.PI );
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(250-ekran*2, 150+szczelina,  i, 1.75 * Math.PI, 0.25 * Math.PI );
		ctx.stroke();
	}	


}



function drawEverything()
{
	if(startFlag ==1)
	{
		myClear();
	 	drawStaticElements();
		drawWaveAndIntensity();
	}
}
function startAnimation()
{
	startFlag = 1;
	drawEverything();
}

function drawStaticElements2(){
	var obszar = document.getElementById("Dyfrakcja");


	var ctx = obszar.getContext("2d");
	var szczelina = Number(parseFloat(document.formularz.szerokosc.value));
	var ekran = Number(parseFloat(document.formularz.L.value));
	var d = Number(parseFloat(document.formularz.szczelina.value));
	d/=5;
	ctx.fillStyle = "#ffffff";
	ctx.fillRect(250 - ekran*2 ,0, 4,600);
	ctx.fillRect(380, 0, 3, 600);

	ctx.fillStyle = "#000000";
	ctx.fillRect(250 - ekran*2, 145 - d , 4, 10);
	ctx.fillRect(250 - ekran*2, 155 + d, 4, 10);

	//strzalki
	ctx.fillRect(450, 150, 140, 2);
	ctx.strokeStyle = "#000000"; 
	
	
	ctx.beginPath();
	ctx.moveTo(590, 151);
	ctx.lineTo(580, 141);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(590, 151);
	ctx.lineTo(580, 161);
	ctx.stroke();

	ctx.fillRect(448, 0, 2, 300);
	ctx.fillRect(445, 10, 10, 1);
	ctx.fillRect(445, 290, 10, 1);

	//skala

	ctx.font = "16px Arial";
	ctx.fillText("Natezenie(α)", 500, 14);

	ctx.font = "10px Arial";
	//ctx.fillRect()
	ctx.fillText("-18[cm]", 460, 13);
	ctx.fillText("18[cm]", 460, 294);
	ctx.fillText("0", 440, 150);


}


function drawWaveAndIntensity2()
{
	var obszar = document.getElementById("Dyfrakcja");
	var ctx = obszar.getContext("2d");

	var alpha, I, sin, lastVal, b, c, beta;
	var lambda = Number(parseFloat(document.formularz.lambda.value));
	var colors = wavelengthToColor(lambda);
	var ekran = Number(parseFloat(document.formularz.L.value));

	var d = Number(parseFloat(document.formularz.szczelina.value));
	var szczelina = Number(parseFloat(document.formularz.szerokosc.value));
	ctx.fillStyle = colors[0];
	ctx.strokeStyle = colors[0];
	
	ctx.beginPath();
	ctx.moveTo(570, 150);
	c = 1.5 + (ekran*2 - 100)* 0.5/50.;

	for(i=150; i >= 0; i-- )
	{
		b = 0.18 * (1 - (i-10)/140.);
		sin = b/ Math.sqrt( Math.pow( b, 2 )+ Math.pow( c, 2 ) );
		alpha = sin * Math.PI * szczelina*1000. / lambda;
		beta = sin * Math.PI * (d*1000) /lambda;
		I = Math.pow(Math.sin(alpha) / alpha, 2);
		I *= Math.pow(Math.cos(beta),2 ); 
		ctx.lineTo(sinToCoords(I), i);
		ctx.fillStyle = rgbToHex(Math.round(colors[1] * I), Math.round(colors[2] * I) , Math.round(colors[3] * I) );
		ctx.fillRect(383, i, 57, 1);

	}
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(570, 150);
	for(i=149; i <= 300; i++ )
	{
		b = 0.18 * (1 - (i-10)/140.);
		sin = b/ Math.sqrt( Math.pow( b, 2 )+ Math.pow( c, 2 ) );
		alpha = sin * Math.PI * szczelina*1000. / lambda;
		beta = sin * Math.PI * d*1000 /lambda;
		I = Math.pow(Math.sin(alpha) / alpha, 2);
		I *= Math.pow(Math.cos(beta),2 ); 
		ctx.lineTo(sinToCoords(I), i);
		ctx.fillStyle = rgbToHex(Math.round(colors[1] * I), Math.round(colors[2] * I) , Math.round(colors[3] * I) );
		ctx.fillRect(383, i, 57, 1);

	}
	ctx.stroke();
	lambda/=100;
	ctx.fillStyle = colors[0];



	for(i=4; i<250 - ekran*2-1; i+=8*lambda)
		ctx.fillRect(i,100, 2,100);


	d/=5;
	for(i=20; i< 280 -(75-ekran)*2; i+=8*lambda)
	{
		ctx.beginPath();
		ctx.arc(250 - ekran*2, 145-d +5 ,  i,  1.75 * Math.PI, 0.25 * Math.PI );
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(250 - ekran*2, 155+d +5,  i, 1.75 * Math.PI, 0.25 * Math.PI );
		ctx.stroke();
	}	


}

function drawEverything2()
{
	if(startFlag2 == 1)
	{
		myClear();
		drawStaticElements2();
		drawWaveAndIntensity2();
	}
}

function startAnimation2()
{
	startFlag2 = 1;
	drawEverything2();
}

function wavelengthToColor(wavelength) {
        var r,
            g,
            b,
            alpha,
            colorSpace,
            wl = wavelength,
            gamma = 1;
 
 
        if (wl >= 380 && wl < 440) {
            R = -1 * (wl - 440) / (440 - 380);
            G = 0;
            B = 1;
       } else if (wl >= 440 && wl < 490) {
           R = 0;
           G = (wl - 440) / (490 - 440);
           B = 1;  
        } else if (wl >= 490 && wl < 510) {
            R = 0;
            G = 1;
            B = -1 * (wl - 510) / (510 - 490);
        } else if (wl >= 510 && wl < 580) {
            R = (wl - 510) / (580 - 510);
            G = 1;
            B = 0;
        } else if (wl >= 580 && wl < 645) {
            R = 1;
            G = -1 * (wl - 645) / (645 - 580);
            B = 0.0;
        } else if (wl >= 645 && wl <= 780) {
            R = 1;
            G = 0;
            B = 0;
        } else {
            R = 0;
            G = 0;
            B = 0;
        }
 
        // intensty is lower at the edges of the visible spectrum.
        if (wl > 780 || wl < 380) {
            alpha = 0;
        } else if (wl > 700) {
            alpha = (780 - wl) / (780 - 700);
        } else if (wl < 420) {
            alpha = (wl - 380) / (420 - 380);
        } else {
            alpha = 1;
        }
 
         colorSpace = ["rgba(" + (R * 100) + "%," + (G * 100) + "%," + (B * 100) + "%, " + 1 + ")", R * 255, G * 255, B * 255, alpha]
 
        // colorSpace is an array with 5 elements.
        // The first element is the complete code as a string.  
        // Use colorSpace[0] as is to display the desired color.  
        // use the last four elements alone or together to access each of the individual r, g, b and a channels.  
       
        return colorSpace;
       
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function updateTextA(val) {
    document.getElementById("a").value="a = " + val/2 + "[μm]"; 
}

function updateTextD(val) {
    document.getElementById("d").value="d = " + val + "[mm]"; 
}

function updateTextLamb(val) {
    document.getElementById("lamb").value="λ = " + val + "[nm]"; 
}

function updateTextEkran(val) {
	var str = 1.5 + (val*2 - 100)* 0.5/50. ;
    document.getElementById("ekran").value="L = " + str + "[m]"; 
}