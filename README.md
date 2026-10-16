# Minimal academic website

A dependency-free personal research site for GitHub Pages.

## Personalise it

Open `index.html` and replace the clearly marked placeholder content:

- `Your Name`, `Your field`, and `Your institution`
- the two short biography paragraphs
- the research interests and education entries
- the Google Scholar and LinkedIn URLs
- `your.name@institution.edu`
- the publication titles, venues, authors, years, and links
- `Your City, Country`
- the page title and description inside `<head>`

The profile image is `Karl-Kristian-Engelund-1100x600.jpg`. It is displayed in a small square frame using CSS, so the original image remains uncropped.

Add your CV as `cv.pdf` in the same directory as `index.html`. The **View CV ↗** link will open it in the browser's PDF viewer.

## Preview locally

You can open `index.html` directly in a browser, or run a small local server from this folder:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish

Because the repository is named `Karl99Kristian.github.io`, pushing these files to the `main` branch should publish the site at <https://karl99kristian.github.io> once GitHub Pages is enabled for the repository.
