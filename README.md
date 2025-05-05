# Webbsidan D-Sektionen.se

Denna version av D-Sektionen.se togs fram verksamhetsår 23/24 som en single-page React-webbapp. Webbappen skrevs 24/25 till största del om som ett full-stack NextJS-projekt, framför allt för att förbättra first-paint prestanda och för att flytta huvudsaklig funktionalitet till TypeScript.

## Status
*Senast uppdaterad: 5 Maj 2025*

Webbsidan är en MVP och redo för testning.

### Funktionalitet
- [x] Skapa länkar i navbar
  - [x] Skapa underlänkar till länkar i navbar
- [x] Skapa sidor
  - [ ] Skapa undersidor (behövs detta?)
- [x] Skapa inlägg
  - [x] Importera inlägg från den tidigare Wordpress-webben
  - [ ] Skapa attachments till ett inlägg
  - [ ] Visa attachments till ett inlägg
- [x] Visa inlägg
- [x] Visa en lista med inlägg
  - [x] Paginering
- [x] Skapa widgetar i höger/vänster sidebar
  - [ ] Söka i sidebar
- [x] Skapa utskott
- [x] Visa utskott
- [ ] Åsiktslådan
- [ ] Sektionsfotograferingssidan

## Kom igång
### Installera dependencies
#### Docker

För att kunna köra eller bygga projektet behöver du Docker och Docker Compose installerade. Docker finns på alla x86 baserade operativsystem, men fungerar bäst på Linux.

- [Installera Docker](https://www.docker.com/)
- [Installera Docker Compose](https://docs.docker.com/compose/install/)

Både utvecklingsmiljön och produktionsbilderna utnyttjar docker för att se till så att miljön ser likadan ut och alla versioner är korrekta.

#### Node

Docker hanterar själv den Node-version som används för att köra webbsidan, men om du vill slippa errors i koden bör du själv installera Node. Alla versioner nyare än Node 20 bör fungera.

- [Installera Node](https://nodejs.org/en/download)

#### NPM paket för frontenden

För att undvika felmeddelanden i koden behöver du också installera de NPM-paket som behövs för frontenden.

```
cd frontend
npm install
```

### Starta utvecklingsmiljön

Använd Docker Compose för att starta utvecklingsmiljön.

```
docker compose up
```
