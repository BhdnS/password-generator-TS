import { TTheme, sunSvg, moonSvg } from './TTheme'


export class Theme {
	private body: TTheme['body'];
	private theme: TTheme['theme'];
	sun: string;
	moon: string;

	constructor() {
		this.body = document.querySelector('body');
		this.theme = document.querySelector('#theme');
		this.sun = sunSvg;
		this.moon = moonSvg;
	}

  public clickTheme(): void {
		if (this.theme !== null) {
			this.theme.addEventListener('click', () => {
				this.changeTheme();
			})
		}
	}

	public loadLocalStorage(): void {
		const theme: string | null = localStorage.getItem('theme');
		if (theme === 'dark') {
			this.dark();
		} else {
			this.light();
		}
	}

  private changeTheme(): void {
		if (this.theme?.classList.contains('sun')) {
			this.dark()
		} else if (this.theme?.classList.contains('moon')) {
			this.light()
		}
	}

	private dark(): void {
		if (this.theme && this.body) {
			this.theme.classList.remove('sun');
			this.theme.classList.add('moon');
			this.body.classList.add('black');
			this.theme.src = this.moon;
	
			localStorage.setItem('theme', 'dark');
		}
	}

	private light(): void {
		if (this.theme && this.body) {
			this.theme.classList.remove('moon');
			this.theme.classList.add('sun');
			this.body.classList.remove('black')
			this.theme.src = this.sun;
	
			localStorage.setItem('theme', 'light');
		}
	}
}