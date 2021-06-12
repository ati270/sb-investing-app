import { UjReszveny } from "../uj-befektetes-models/uj-befektetes/uj-befektetes.model";

export class User {
   private id: string;
   private firstName: string;
   private lastName: string;
   private email: string;
   private passw: string;
   private birthDate: Date;
   private reszvenyek: UjReszveny[];

  constructor() {
  }

     public get $reszvenyek(): UjReszveny[]{
          return this.reszvenyek;
     }

    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Getter $firstName
     * @return {string}
     */
	public get $firstName(): string {
		return this.firstName;
	}

    /**
     * Getter $lastName
     * @return {string}
     */
	public get $lastName(): string {
		return this.lastName;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $passw
     * @return {string}
     */
	public get $passw(): string {
		return this.passw;
	}

    /**
     * Getter $birthDate
     * @return {Date}
     */
	public get $birthDate(): Date {
		return this.birthDate;
	}

    /**
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}

    /**
     * Setter $firstName
     * @param {string} value
     */
	public set $firstName(value: string) {
		this.firstName = value;
	}

    /**
     * Setter $lastName
     * @param {string} value
     */
	public set $lastName(value: string) {
		this.lastName = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Setter $passw
     * @param {string} value
     */
	public set $passw(value: string) {
		this.passw = value;
	}

    /**
     * Setter $birthDate
     * @param {Date} value
     */
	public set $birthDate(value: Date) {
		this.birthDate = value;
	}

     public set $reszvenyek(value: UjReszveny[]){
          this.reszvenyek = value;
     }


}
