import TGenerate from './TGenerate'

export class GeneratePassword {
	public input: TGenerate['input'];
	public result: TGenerate['result'];
	public btn: TGenerate['btn'];
	public passwordLength: TGenerate['passwordLength'];
	private value: number;

	constructor() {
		this.input = document.querySelector('#passwordLength');
		this.result = document.querySelector('#passwordResult');
		this.btn = document.querySelector('#btn');
		this.passwordLength = document.querySelector('#password');

		this.value = 4;
	}

	public btnClick(): void {
		this.btn?.addEventListener('click', (e) => {
			e.preventDefault();	
			this.value = Number(this.input?.value);
			this.generatePassword();
		})
	}

	public updateValue(): void {
		let value: number | null = this.input ? Number(this.input.value) : null;
		if (this.input) {
			this.input.addEventListener('change', () => {
				value = this.input ? Number(this.input.value) : null;
				if (this.passwordLength) {
					this.passwordLength.textContent = `Password length: ${value}`
				}
			})
		}
	}

	private generatePassword(): void {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let password: string = '';
		for (let i = 0; i < this.value; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			password += characters.charAt(randomIndex);	
		}
		if (this.result) {
			this.result.textContent = password;
		}
	}
}