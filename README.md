# Algoritmo da Cifra de César

Em criptografia, uma cifra de César , também conhecida como a cifra de deslocamento , código de César ou deslocamento de César , é uma das técnicas de criptografia mais simples e conhecidas, substituindo por uma letra em um número fixo de posições no alfabeto. Por exemplo, com um deslocamento à esquerda de 3, D seria substituído por A, E se tornaria B, e assim por diante. O método recebeu o nome de Júlio César, que o usava em suas correspondências privadas.

![Cifra de César](https://miro.medium.com/max/1400/1*_VoqIhRr7qxIdq2NQj4Zfg.png)

## Exemplo

A transformação pode ser representada pelo alinhamento de dois alfabetos; o alfabeto cifrado é o alfabeto simples girado para a esquerda ou para a direita em algumas posições. Por exemplo, aqui está uma cifra de César usando uma rotação à esquerda de três lugares, equivalente a um deslocamento à direita de 23 (o parâmetro shift é usado como chave):

```
Alfabeto:    ABCDEFGHIJKLMNOPQRSTUVWXYZ
Cifra:       XYZABCDEFGHIJKLMNOPQRSTUVW
```

Ao criptografar, uma pessoa procura cada letra da mensagem na linha "simples" e escreve a letra correspondente na linha "cifrada".

```
Simples Texto: A RÁPIDA RAPOSA MARROM PULA SOBRE O CÃO PREGUIÇOSO
Texto Cifrado: X OXMFAX OXMLPX JXOOLJ MRIX PLYOB L ZXL MOBGRFZLPL
```

### Referências

![Cifra de César - Wikipédia](https://en.wikipedia.org/wiki/Caesar_cipher)