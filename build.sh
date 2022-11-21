rm -rf docs
ng build
# rm -rf ../nginx/html/
# cp -r docs ../nginx/html




# I just had to do this to an existing project and pieced together a bunch of information from various places, mostly from this similar stackoverflow question. Here's a set of command line actions (that worked for me on Mac OSX)

# rename all your current files
# find . -name "*.css" -exec bash -c 'mv "$1" "${1%.css}".scss' - '{}' \;

# change angular cli config file to include styles.scss instead of styles.css
# sed -i -e 's/styles.css/styles.scss/g' .angular-cli.json

# now we need to go thru and fix up all the places where ts files refer to .css files
# there’s probably a better way (and will only work if you don’t have multiple css files in a component)
# this is what I did
# find ./src -name "*.ts" -exec sed -i -e 's/\(.*styleUrls.*\)\.css\(.*\)/\1\.scss\2/g' {} +
# rm -r *.ts-e