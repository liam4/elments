var start = Date.now();

elm.from('head')

  // <link rel='stylesheet' href='colors.css' />
  .add(elm.create('link')
    .attr('rel', 'stylesheet')
    .attr('href', 'colors.css'));

elm.from('body')

  // <h1>Hello</h1>
  .add(elm.create('h1')
    .add(elm.text('Hello')))

  // <p><i>In a world where we don't use HTML templates...</i> Use elm!</p>
  .add(elm.create('p')
    .add(elm.create('i').add(elm.text('In a world where we don\'t use HTML templates...')))
    .add(elm.text(' Use elm!')))

  // <button>Don't click me</button>
  // Does something when it's clicked
  .add(elm.create('button')
    .add(elm.text('Don\'t click me'))
    .on('click', function() {
      alert('How would you like it if I clicked you?');
    }))

  // <div>Don't even think about hovering over me!</div>
  // Does something when the mouse is moved over it
  .add(elm.create('div')
    .add(elm.text('Don\'t even think about hovering over me!'))
    .on('mouseover', function() {
      alert('D:');
    }))

  // <p class='red'>Are you feeling red today?</p>
  .add(elm.create('p')
    .class('red')
    .add(elm.text('Are you feeling red today?')));

elm.from('body')
  .add(elm.create('p')
    .add(elm.text('This page took '))
    .add(elm.text(Date.now() - start))
    .add(elm.text(' milliseconds to generate (on your client side).')));
