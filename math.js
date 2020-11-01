// Değişkenlerle ve koşullarla basit matematik işlemleri

var ilkSayı;
ilksayı = 45;

var ikinciSayı;
ikinciSayı = 90;

var sonuc;
sonuc = ilkSayı + ikinciSayı

if (ilkSayı > ikinciSayı);{
    document.write("Sonuç = " + sonuc);
    document.write("Öte yandan, " + ilkSayı + "sayısı, " + ikinciSayı + " sayısından büyüktür.")
} else if(ilkSayı == ikinciSayı){
    document.write("Sonuç = " + sonuc);
    document.write(ilkSayı + "= " + ikinciSayı);
} else if (ikinciSayı > ilkSayı){
    document.write("Sonuç = " + sonuc);
    document.write("Öte yandan, " + ikinciSayı + " sayısı, " + ilkSayı + " sayısından büyüktür.")
}

if(sonuc > 75){
    if(ilkSayı < ikinciSayı){
        document.write("Sonuç = " + sonuc);
        document.write("Öte yandan, " + ilkSayı + " sayısı " + ikinciSayı + " sayısından büyüktür.");
        document.write("Bu sonuç 75 değerinden de büyüktür.");
    }
    else if(!ilkSayı < ikinciSayı){
        document.write("Sonuç = " + sonuc);
        document.write("Öte yandan," + ikinciSayı + " sayısı," + ilkSayı + " sayısından büyüktür.");
        document.write("Bu sonuç 75 değerinden de büyüktür.");
    }
    else{
        document.write("Sonuç = " + sonuc);
        document.write("Öte yandan, " + ilkSayı + " sayısı," + ikinciSayı + " sayısına eşittir.")
    }

} else if(!sonuc > 75){
    document.write("Bu işlemin sonucu 75 sayısından küçük olduğu için hesaplanamaycak.")
}

