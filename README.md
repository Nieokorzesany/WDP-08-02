# WDP Projekt Zespołowy

## Opis projektu

Projekt polega na dopracowaniu rozpoczętej strony sklepu internetowego.

## Demo

[Link do strony z podglądem projektu](https://trusting-lovelace-0f4130.netlify.com/#).

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `npm install`.

Teraz możesz zacząć pracę, korzystając z przygotowanych zadania `npm run watch`.

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderze `src/`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderu `src` buduje project w folderze `dist`
- `watch`: odpala `browser-sync`, obserwuje zmiany w folderze `src` i przebudowuje projekt
- `code-quality`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu i sprawdza błędy w JS.

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostanie uruchomiony skrypt `code-quality`
dla plików, które zostały wybrane do za-commit'owania.

## Konwencje i dobre praktyki

1. Ogólne konwencje i dobre praktyki

- wykorzystanie frameworka bootstrap,
- wykorzystanie biblioteki ikon fontawesome,
- podział pliku index.html na sekcje,
- podział pliku style.scss na sekcje,

2. Style CSS

- wykorzystanie preprocesora SCSS,
- wykorzystanie zmiennych,
- wykorzystanie placeholdera,

3. Javascript

- skrypty projektu znajdują się w pliku app.js,
- wykorzystanie eslint do weryfikacji kodu,
- wykorzsytanie biblioteki tiny-slider do obsługi sliderów w projekcie.

4. Repozytorium GIT
   [Link do repozytorium projektu](https://github.com/kstobiecki/WDP-08-02).
   Merge zmian lub nowych funkcjonalności w projekcie wymaga co najmniej jednego approve od pozostałych członków zespołu.
