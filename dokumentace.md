# Dokumentace generátoru tabulek

Generátor tabulek je JavaScriptová třída, která vám umožňuje dynamicky vytvářet tabulky s řádky a sloupci na HTML stránce. Tato dokumentace poskytuje přehled kódu a způsobu jeho použití.

## Inicializace

Nejprve je třeba inicializovat ikony Feather voláním funkce `feather.replace()`. Toto je nezbytné, pokud chcete používat ikony.

```javascript
feather.replace();
```

## Třída: table
Třída table slouží k vytváření a správě tabulek.

## Konstruktor
Pro vytvoření tabulky můžete instanciovat třídu table. Můžete zadat počet sloupců a řádků jako parametry, ačkoliv jsou výchozím nastavením 1 sloupec a 3 řádky, pokud nejsou specifikovány.
```javascript
const thisTable = new table();
```

## Metoda: create()
Metoda create() je zodpovědná za generování HTML struktury tabulky. Přidává tabulku na specifikovaný HTML prvek s ID "page".
```javascript
thisTable.create();
```

## Metoda: save()
Metoda save() slouží k uložení dat tabulky. V současné době zobrazuje upozornění, když je volána.

## Přidání řádků a sloupců
Řádky lze přidávat kliknutím na tlačítko "Přidat řádek".
Sloupce lze přidávat kliknutím na tlačítko "Přidat sloupec".

## Smazání řádků a tabulek
Řádek lze smazat kliknutím na tlačítko "Smazat řádek".
Tabulku lze smazat kliknutím na tlačítko "Smazat tabulku".
