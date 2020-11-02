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


// Ve , Veya

var kola;
kola = kola;

var ayran;
ayran = ayran;

var meyveSuyu;
meyveSuyu = meyveSuyu;

var sonuc;
sonuc = kola + ayran + meyveSuyu;

var basarili;
basarili = "Görev başarılı, tüm istekler yerine getirildi."

var basarisiz;
basarisiz = "Göre başarısız, istekler tamamlanamadı."

if (sonuc == meyveSuyu && ayran && kola) {
    document.write(basarili);
} else {
    document.write(basarili);
}

// Başka bir önek

var ingilizce;
ingilizce = ingilizce;

var almanca;
almanca = almanca;

var fransızca;
fransızca = fransızca;

var basarili;
basarili = "Görev başarılı, istekler yerine getirildi."

var basarisiz;
basarisiz = "Görev başarısız, istekler yerine getirilemedi. Tüh!"

if (sonuc == ingilizce || almanca || fransızca) {
    document.write(basarili);
} else {
    document.write(basarisiz);
}


