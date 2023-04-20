/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Leopards',
      [
        {
          name: 'Fluffles',
          img: 'https://indie88.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-09-at-8.14.28-AM-1024x812.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Frosty',
          img: 'https://resources.stuff.co.nz/content/dam/images/1/y/n/4/r/0/image.related.StuffLandscapeSixteenByNine.710x400.1yn442.png/1578531746815.jpg?format=pjpg&optimize=medium',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Leopold',
          img: 'https://images6.fanpop.com/image/photos/40700000/Snow-Leopard-big-cats-40775185-1920-1200.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Felix',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Snow_Leopard_Being_Cute_%2816135561540%29.jpg/1200px-Snow_Leopard_Being_Cute_%2816135561540%29.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Xena',
          img: 'https://en.bcdn.biz/images/emails_source/f4f6e233-5c65-4fe6-a2c5-c4830141c123.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Leoparnzel',
          img: 'https://t3.ftcdn.net/jpg/03/18/47/72/360_F_318477235_qtvHD7hAYa8V4Z7cIejqhqIhWlS9hQ6N.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ziggy',
          img: 'https://live.staticflickr.com/8694/16603075919_fd03208ecb_b.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Furball',
          img: 'https://c4.wallpaperflare.com/wallpaper/174/825/229/cute-snow-leopard-gray-and-black-lion-wallpaper-preview.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Snuggles',
          img: 'https://c4.wallpaperflare.com/wallpaper/737/779/604/snow-leopard-cute-cub-animal-wallpaper-preview.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Simba',
          img: 'https://www.theanimalfacts.com/wp-content/uploads/2020/08/Snow-leopard-cub-Brookfield-5.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
