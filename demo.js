elm.from('body')
    .add(elm.create('h1')
       .add(elm.text('Hello')))
   .add(elm.create('p')
       .add(elm.text('This is a paragraph')));

/*
<body>
    ...
    <h1>
        Hello
    </h1>
    <p>
        This is a paragraph
    </p>
</body>
*/
