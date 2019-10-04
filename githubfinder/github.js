class Github {
  constructor() {
    this.client_id = 'bc0741827a386f271e93';
    this.client_secret = 'd1875c2e179455a11d22cebf8e84f0d233c69284';
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
