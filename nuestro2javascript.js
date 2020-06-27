function recta(){
	var ao;var bo; var a1;var b1;var c0;var c1;var m;
	
	 ao=Number(document.getElementById('valor1').value);
	 bo=Number(document.getElementById('valor2').value);
	 co=Number(document.getElementById('valor3').value);
	 a1=Number(document.getElementById('valor4').value);
	 b1=Number(document.getElementById('valor5').value);
	 c1=Number(document.getElementById('valor6').value);
	 
	 m=ao*b1-bo*a1;
	 if(m!==0){
		 var resultado1=(b1*co-bo*c1)/m;
		 
		 document.getElementById('resultado1').value=resultado1;
		 
		 var resultado2=(ao*c1-a1*co)/m;
	 document.getElementById('resultado2').value=resultado2;}
else{alert('Las rectas no se intersecan');}}