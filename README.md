### Holo Heights App

![GitHub repo size](https://img.shields.io/github/repo-size/risbi0/Holo-Heights-App)

Made in React and Tailwind. Images processed using Python.

When adding new members:

1.) Save full body avatar image in `images/raw` folder. Save avatar image in `website/public`.

2.1.) Edit full body avatar image, crop from bottom until the sole/feet and overwrite save.

2.2.) Crop from top until the top of the head and save to `images/ref`.

3.) Add the appropriate info in `website/src/data.js` and in the `data` dict in `images/script.py`, afterwards run the script.
