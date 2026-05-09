"""Compatibility entrypoint for IDE run configurations.

Prefer using `python3 manage.py <command>` from the Backend directory.
"""

from manage import main


if __name__ == "__main__":
    main()
