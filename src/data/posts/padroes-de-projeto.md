> **Autor**: Ruan Gomes  
> **GitHub**: ruangoa  
> **LinkedIn**: ruangoa  
> **Email**: ruangoa0@gmail.com  
> **Data**: *19 de Março de 2022*  

# Padrões de Projeto 

Sabe-se que um código limpo e expansível é o segredo de um bom ciclo de vida de um software, e em parte, é por isso que padrões de projeto s
ão utilizados, visando uma boa mantenabilidade, para que seja possível realizar modificações e adições no código de forma mais simples e segura.

## O que é um padrão de projeto?

Desde o início do desenvolvimento de software, foram observados vários tipos de problemas que se repetiam com bastante frequência, nos vários tipos de software que são desenvolvidos, com cada um desses possuindo sua aplicação específica. Com isso, alguns engenheiros de software perceberam que podiam formar agrupamentos com tais problemas, assim, generalizando e adaptando uma mesma ideia chave para cada agrupamento, é possível resolver tais problemas de uma forma simples e eficaz.

Os padrões de projeto foram disseminados pelo quarteto conhecido como `Gang of Four` ou `GoF`, que em 1994 criaram um livro chamado `Design Patterns: Elements of Reusable Object - Oriented Software`.

Para a criação de cada um desses padrões, foi feita uma curadoria com pessoas muito engajadas, buscando uma boa generalização, para que seja possível utilizar a resolução que cada um desses traz para qualquer projeto (obviamente com certas adaptações).

O termo padrão de projeto também é conhecido como **Padrão de Design**.

### Do que consiste um padrão de projeto?

Há uma forma formal de descrever um padrão de projeto, e ela foi pensada para que houvesse uma absorção mais fácil por parte de outras pessoas. A seguir, uma lista de algumas coisas que uma descrição de padrão de projeto deve possuir:

- `Nome`: Um bom nome para o padrão é algo que pode facilitar o primeiro contato de outra pessoa.
- `Objetivo`: É basicamente uma descrição do padrão, a forma como o padrão atua para resolver o problema.
- `Problema`: O que esse padrão trata? O problema pode ser um bom guia para quem está buscando por ajuda em soluções.
- `Consequências`: Aqui são descritos os benefícios(e talvez malefícios) geradospela utilização do padrão.

Sim, nem tudo na vida são flores, há certos padrões, com certas aplicações, que mesmo facilitando a resolução do seu problema, podem adicionar algo que pode prejudicar o código em algum aspecto, porém, a ideia é que tais prejuízos sejam controlados, e de toda forma, nada impede que você analise a ideia por trás de um desses padrões de projeto, e adapte-a ao seu código, de modo que os prejuízos sejam minimizados.

### Benefícios da utilização de padrões

É totalmente plausível que você seja um bom desenvolvedor mesmo sem conhecer padrões de projeto, entretanto, é muito possível que você esteja implementando padrões já descritos por outras pessoas mesmo sem saber. Então você deve estar se perguntando: "ué, então porque eu deveria gastar processamento e memória do meu cérebro para aprender padrões?", então aqui estão alguns motivos:

- Como citado anteriormente, a criação de um padrão de projeto, envolve de certa forma uma curadoria, onde soluções são criadas e testadas por outras pessoas, e a partir disso um padrão é criado. Se você conhece um padrão de projeto que resolve um problema que você está passando, é possível que você ganhe tempo por já ter passado pelo "caminho das pedras", fazendo com que você gaste seu tempo apenas adaptando ao seu código e problema, que são coisas específicas.
- Conhecer padrões de projeto facilita a comunicação com seu time, já que cada um possui um nome único, e também uma solução para problemas diferentes, com consequências no código diferentes.
- Muitas vezes, ajuda a entender como outras pessoas chegaram na melhor resolução para um determinado problema, fazendo com que você tenha uma melhor desenvoltura para resolver outros problemas.

A ideia é que você aplique e adapte um padrão, não em toda parte do código que você ver que se encaixe, é importante que você julgue se um código mais simples e direto não pode ser utilizado ao invés de um padrão, pois como citado anteriormente, padrões podem trazer prejuízos ao código, que muitas vezes são justificáveis para resolução de um problema específico.

## Alguns padrões de projeto

Os integrantes da Gof em seu livro, coletaram 23 padrões, que foram divididos em 3 grupos. Sendo esses:

### Padrões Criacionais

São os padrões de criação e tratam de **construção de objetos e de referência**. Esse grupo é importante pois auxilia na melhora da flexibilidade e da reutilização de código já existente, sustentando um dos princípios mais importantes do desenvolvimento de software: **programe para interface, e não para implementações**.

Os padrões presentes nesse grupo são:

- `Abstract Factory`: Cria famílias de objetos `on the fly`, melhorando a flexibilidade do código.
- `Factory Method`: Cria objetos `on the fly`, também melhorando a flexibilidade.
- `Builder`: Constrói um "produto" passo-a-passo.
- `Prototype`: Permite a criação de novos objetos a partir da cópia de um modelo original.
- `Singleton`: Permite que você garanta que uma classe tenha apenas uma instância, enquanto provê acesso global para essa.

### Padrões Estruturais

Esse grupo possui padrões que tratam da criação de objetos em estruturas maiores, com interação com outros objetos, mantendo essas estruturas flexíveis e eficientes.

Os padrões presentes nesse grupo são:

- `Adapter`: Permite integração entre objetos com interfaces incompatíveis.
- `Bridge`: Permite que você divida uma *God Class*, ou um conjunto de classes intimamente relacionadas, em hierarquias separadas com propósitos definidos.
- `Composite`: Permite que você construa objetos em estruturas de árvores, e trabalhe com essas estruturas como se fossem um único objeto.
- `Decorator`: Com esse padrão é possível acoplar novos comportamentos a um objeto através de um invólucro de objeto que contém tais comportamentos.
- `Facade`: Padrão que fornece uma interface simplificada para uma biblioteca, framework ou qualquer conjunto de classes.
- `Flyweight`: Auxilia no compartilhamento de pequenos recursos entre objetos, fazendo com que haja uma menor utilização de RAM.
- `Proxy`: Permite que você adicione um objeto intermediador A para o acesso a um objeto B, permitindo que alguma ação seja realizada antes ou depois do acesso ao objeto B.

### Padrões Comportamentais

Esse grupo possui padrões que tratam algoritmos e designaçòes de responsabilidades entre objetos.

Os padrões presentes nesse grupo são:

- `Chain of Responsibility`: Permite que você repasse pedidos por uma corrente de objetos com responsabilidades bem definidas. Ao receber um pedido, cada um desses objetos(também chamados de ***handlers***), decide se vai processar o pedido ou repassar para o próximo handler da corrente.
- `Command`: É um padrão que transforma um pedido em um objeto que contém toda a informaçào sobre o pedido, permitindo que você crie uma fila de pedidos, por exemplo.
- `Observer`: Permite que você crie um mecanismo de comunicação que serve para notificar múltiplos objetos sobre qualquer evento que aconteça com o objeto que está sendo observado.
- `Mediador`: Reduz as dependências caóticas entre objetos, restringindo comunicações diretas entre objetos, forçando-os a se comunicar diretamente apenas com o objeto mediados.
- `Strategy`: Permite que você defina uma família de algoritmos, colocando-os em classes separadas, e fazendo com que os objetos criados a partir dessas sejam intercambiáveis.
- `State`: Permite que um objeto altere seu comportamento quando seu estado interno muda.
- `Iterator`: Permite que você percorra elementos de uma coleção sem expor a representação dessa, como listas, pilhas e árvores, por exemplo.
- `Memento`: Permite que você salve e restaure o estado anterior de um objeto sem revelar os detalhes de implementação.
- `Template Method`: Faz com que o esqueleto de um algoritmo seja construido em uma super classe, e que as subclasses implementem etapas específicas desse algoritmo sem modificar o restante da estrutura.
- `Visitor`: Permite que os algoritmos sejam separados dos objetos em que eles operam.

## Considerações

Alguns desses padrões são grandes o suficiente para possuirem talvez um post dedicado, então, para evitar explicar bem alguns padrões, e outros não, deixando o propósito mal definido, não exemplifiquei nenhum dos padrões propositalmente, mas deixo aqui minha recomendação [dessa](https://github.com/RefactoringGuru) organização no GitHub para quem desejar se aprofundar mais, nela você vai encontrar a implementação para os padrões citados nesse post em diversas linguagens de programação.

## Links úteis

- [Site com diversas dicas de refatorações de código](https://refactoring.guru/)
- [Vídeo explicativo sobre padrões de projeto](https://www.youtube.com/watch?v=J-lHpiu-Twk)
