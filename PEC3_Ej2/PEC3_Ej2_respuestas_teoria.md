### Modifica el codi per aconseguir que aparegui una línia vermella d'error a l'IDE avisant-te que s'està disparant un TypeError. Pren una captura de pantalla del teu resultat i fes que es mostri dins del fitxer PEC3_Ej2_respuestas_teoria.md. Dins aquest mateix document explica per què s'ha produït això i quins avantatges té.

![Alt text](https://user-images.githubusercontent.com/14861253/284102600-dd1988cf-59a4-407b-b779-397eb06a16e2.png)

Canviant la variable en el <ins>.apple</ins> de la <ins>línia 7</ins>, en la declaració de la variable *d* ja tindríem aquest punt, doncs a i b son un *type number* i al no ser objectes donaria error.

### 1. Per a cadascun dels valors del fitxer code2.ts, quin tipus de dades inferirà TypeScript? Expliqueu per què s'ha inferit aquest tipus de dades.

Aquest exercici es graciós, més que res per curiositat pròpia. Si feim cas al que diu <ins>*Visual Studio Code*</ins>, ens donaria el següent i <ins>aquestes son les dades que inferiran per a *typescript*</ins>:

```typescript
    const a = number;
    const b = string;
    const c = string;
    const d = array de booelans;
    const e = objecte amb una string;
    const f = array amb números i/o un booelans;
    const g = un array de números;
    const h = tipus null;
```

Ara bé, vaig voler fer un *typeof* de cada variable per saber que donava i el resultat va ser:

```typescript
    number
    string
    string
    object
    object
    object
    object
    object
```

Podem veure que en la variable <ins>**d**</ins>, en lloc de un array, *typeof* veu un objecte (ja que considera que un *array* es un sub-objecte), el mateix ocorre amb la variable <ins>**f**</ins>.<br>
El més graciòs, es *null* que *typeof* dona objecte i segons *stackoverflow* es un error de fa estona que ha estat intentat canviar.<br>
https://stackoverflow.com/questions/18808226/why-is-typeof-null-object

### 2. Per què es dispara cadascun dels errors del fitxer code3.ts?
```typescript
i = 4; // Error TS2588 : Cannot assign to 'i' because it is a constant.ts(2588)
```

S'està declarant una constant i després s'està intentant canviar el valor de la constant, cosa que no es pot fer.

```typescript
j.push('5'); // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.
```

En aquest cas, <ins>**j**</ins> ha estat declarada com a un array de números, i estem intentant agregar una *string*.

```typescript
let k: never = 4; // Error TSTS2322: Type '4' is not assignable to type 'never'.
```

El tipus de dada **never** s'utilitza per representar funcions que mai han de retornar un valor o per variables que mai han de ser inicialitzades. Al inicialitzar un valor, *Typescript* mostra l'error ja que està violant la restricció del tipus de dada **never**.

```typescript
let m = l * 2; // Error TS2571: Object is of type 'unknown'.
```

La variable <ins>**i**</ins> està declarada amb *unknown*, per tant *Typescript* no té informació sobre el tipus específic de dades que conté en temps de compilació. Això es deu a que amb *unknown* es obligatori realitzar la comprovació de tipus de dada i fer conversions abans de realitzar certes operacions o manipulacions.

### 3. Quina és la diferència entre una classe i una interfície a TypeScript?

Ambdues són estructures que defineixen com s'ha de declarar un objecte, però tenen certes diferències com poden ser:
- Les interfícies son com un contractes per a contenedors de dades que indiquen quines propietats té un objecte i permet que el compliador ho apliqui, sense interferir a com s'ha de comportar.
- Les classes permeten implementar funcions específiques d'instàncies amb valors predeterminats. Aquests comportaments poden estendre's, heretar-se i/o sobreescriure's.
