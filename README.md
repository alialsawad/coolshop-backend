# Coolshop Backend Test

## Tasks

Write a script that executes the current requirements:

- Receives as input the path to a CSV file to be imported
- A column number in which to search
- A search key to validate against

The script must be invoked in this way (example in PHP):

```bash
$ php src/search.php ./file.csv 2 Alberto
```

Where ./file.csv is the path to a CSV file formatted in this way:

```
1,Rossi,Fabio,01/06/1990;
2,Gialli,Alessandro,02/07/1989;
3,Verdi,Alberto,03/08/1987;
```

The number 2 represents the index of the column to search in (in the previous file the name) and Alberto represents the search key.

The output of the command must be the corresponding line, in our case: `3, Verdi, Alberto,03/08/1987;`

### Available Commands

```bash
$ node index.js [path] [column number / options] [key]
```

- Path: this is the location of the file.
- Column number: this is the index of the required column.
- Options:
  - all: get all available data.
  - first: get the first entry.
  - last: get the last entry.
  - head: returns the first five results.
  - tail: returns the last five results.
  - random: returns a random entry.
- Key: the value to look for.
