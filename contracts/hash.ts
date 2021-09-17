/**
 * Contract source: https://git.io/Jfefs
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

declare module '@ioc:Adonis/Core/Hash' {
  interface HashersList {

    argon: {
      driver: 'argon2',
      variant: 'id',
      iterations: 3,
      memory: 4096,
      parallelism: 1,
      saltSize: 16,
    },
    /**
     * Make sure to install the driver from npm
     * ------------------------------------
     * npm i phc-bcrypt
     * ------------------------------------
     */
     bcrypt: {
      driver: 'bcrypt',
      rounds: 10,
    },
  }
}
