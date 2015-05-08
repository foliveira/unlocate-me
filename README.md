# unlocate-me - Use a DNS masking service to mask your location

[![npm package](https://nodei.co/npm/unlocate-me.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/unlocate-me/)

`unlocate-me` is a tool to use a DNS masking service straight from the terminal.

#### Heads up warning!
`unlocate-me` **does not** update your DNS settings, it just facilitates the register and update process of said services.

## Usage

Just use it directly from the terminal to see the different options

```bash
$ unlocate

Usage: unlocate [options] [command]

  Commands:

    register         Register with a service
    update <apikey>  Update your info with a service
    help [cmd]       display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

Or, just go straight to the point, to register with the service

```bash
$ unlocate register
```

Running `unlocate register` outputs an **apikey** that you can use with `unlocate update`

```bash
$ unlocate update <apikey>
```

## Supported Services

* [Unlocator.com](https://unlocator.com)

**Please don't abuse their systems!**

## License
Copyright (c) 2015 Fábio Oliveira. Licensed under the MIT license.

[![Analytics](https://ga-beacon.appspot.com/UA-30569297-6/foliveira/unlocate-me?pixel)](https://github.com/foliveira/unlocate-me)
