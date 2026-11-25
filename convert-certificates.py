
import fitz
from pathlib import Path

source = Path("public/certificates")
destination = Path("public/images/certificates")

destination.mkdir(parents=True, exist_ok=True)

pdf_files = list(source.glob("*.pdf"))

if not pdf_files:
    print("Aucun fichier PDF trouve !")

for pdf in pdf_files:
    try:
        document = fitz.open(pdf)

        if len(document) == 0:
            print(f"EMPTY: {pdf.name}")
            continue

        page = document[0]

        pix = page.get_pixmap(
            matrix=fitz.Matrix(1.8, 1.8),
            alpha=False
        )

        output = destination / f"{pdf.stem}.png"
        pix.save(output)

        print(f"OK: {pdf.name} -> {output.name}")

        document.close()

    except Exception as error:
        print(f"ERROR: {pdf.name} -> {error}")

print("\nConversion terminee !")
