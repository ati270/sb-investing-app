export class User {
   id: string;
   username: string;
   email: string;
   password: string;
   firstname: string;
   lastname: string;

  constructor() {
  }


    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Getter $username
     * @return {string}
     */
	public get $username(): string {
		return this.username;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $password
     * @return {string}
     */
	public get $password(): string {
		return this.password;
	}

    /**
     * Getter $firstname
     * @return {string}
     */
	public get $firstname(): string {
		return this.firstname;
	}

    /**
     * Getter $lastname
     * @return {string}
     */
	public get $lastname(): string {
		return this.lastname;
	}

    /**
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}

    /**
     * Setter $username
     * @param {string} value
     */
	public set $username(value: string) {
		this.username = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Setter $password
     * @param {string} value
     */
	public set $password(value: string) {
		this.password = value;
	}

    /**
     * Setter $firstname
     * @param {string} value
     */
	public set $firstname(value: string) {
		this.firstname = value;
	}

    /**
     * Setter $lastname
     * @param {string} value
     */
	public set $lastname(value: string) {
		this.lastname = value;
	}


}
