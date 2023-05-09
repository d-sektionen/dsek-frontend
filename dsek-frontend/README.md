# Dsek-frontend

### Features:

### TODO:
- [ ] Bygg ut sektionssidorna med information som rör sektionen. Detta ska göras med Page.js under Templates
- [ ] Bygg ut "Sökande" sidorna med Page.js
- [ ] Fixa sökrutan i Sidenav på huvudsidan (lägg till funktionalitet)
- [ ] Kontakt (länk i sidenav)
- [ ] Fotoalbum (länk i sidenav)
- [ ] staben font
- [ ] dsek-frontend/public/fake-cms/pages/*.md borde flyttas (ska de ligga i cms?)
- [ ] pagenav-knappar funkar inte riktigt...
- [ ] Alumni-blogg (meny)
- [ ] Företag (meny)
- [ ] Exjobb (meny)
- [ ] länkar på utskottssidor
- [ ] borde hoppa till konsekvent plats (t.ex. högst upp) på sidan när man byter sida med pagenav-knappar
- [ ] UtbU kontaktuppgifter
- [ ] 

### Bugs
- [x] det går inte att klicka längst ut på högerkanten av dropdownmenyknapparna (menyn minimeras när musen fortfarande hovrar över menyn)
- [x] PageNavs sifferknappar buggar lite...
- [x] Länkarna i smala menyn (de som inte är dropdown) funkar bara om man klickar på texten, inte hela knappen
- [ ] bilder i md pages
- [ ] hemsidan går typ sönder om den är lite för inzoomad
- [ ] menyn i smalt läge bör menyn stängas när man klickar på en av länkarna (vilket inte händer när man redirectar inom sidan)
- [ ] namn på utskottssidor
- [ ] PubU:s sida är lite wonky
- [x] EventU:s sida: borde vara mailto-länk i "grupperna" (e-post-knapp)
- [x] Kanske problem med PageNav button, scroll to top, firefox (knapp 2?)


## CMS notes
https://directus.io/

Lägg till cors grejer i docker-compose.yml:
```yml
    environment:
      CORS_ORIGIN: '*'
      CORS_ENABLED: 'true'
```


```sh
docker-compose up -d
# tänk inte, gör det bara
chmod 777 uploads/
```

