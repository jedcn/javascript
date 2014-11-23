# JavaScript Notes+Specs

I read some books:

* [The Good Parts][good-parts]
* [Functional JavaScript][fun-js]

[good-parts]: http://shop.oreilly.com/product/9780596517748.do
[fun-js]: http://shop.oreilly.com/product/0636920028857.do

And looked through some websites:

* [Jasmine Introduction][jasmine-intro]

[jasmine-intro]: https://jasmine.github.io/2.0/introduction.html

And I took these notes.

## Notes?

Are written in javascript and markdown, and live in reasonably named
directories.

## Specs?

Let me interact with examples, and verify that they work as I'd
expect.

I start by bringing in dependencies per usual:

```
npm install
```

### One Time Run

If I want to see that things work, generally:

```
npm test
```

### Continuously Run

If I want to see that things work in several browsers, or I am
actively taking notes and writing specs and want to see that things
run each time I save:

```
npm start
```

And when I'm done I hit CTRL-C.
