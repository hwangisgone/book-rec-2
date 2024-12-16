### Get help
```
python getdata.py --help
```

Export Hardcover API data to JSON in chunks. Will get book data sorted from most rated to least rated (minimum 100
ratings).

```
optional arguments:
  -h, --help            show this help message and exit
  -s START, --start START
                        The starting value of the range (default: 0).
  -e END, --end END     The ending value of the range (default: 50).
  -t STEP, --step STEP  Step size for the range (default: 1).
  -m MAX_PER_FILE, --max_per_file MAX_PER_FILE
                        Maximum number of entries per file (default: 10).
```