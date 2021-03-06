export default {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          firstname: 'Iveren',
          lastname: 'Shaguy',
          username: 'iverenshaguy',
          email: 'iverenshaguy@gmail.com',
          passwordHash:
            '000000100007a12016262f8e438082795b2154dae2c51201fe24c8007b4a11507183a1f9cf425de1218dac3804b30c7412f34d0c8cee1332',
          aboutMe: 'Smart',
          occupation: 'Software Developer',
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          firstname: 'Praise',
          lastname: 'Shaguy',
          username: 'praiseshaguy',
          email: 'praiseshaguy@gmail.com',
          passwordHash:
            '000000100007a120a7c969feb961aa7da34ea2eefd17cf4ebfb6c91b67b9b92a84ba199a3fbc44400c0c587d30de96935036dfea15ddf1b3',
          aboutMe: 'Fun-loving',
          occupation: 'Event Planner',
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          firstname: 'David',
          lastname: 'Shaguy',
          username: 'davidshaguy',
          email: 'davidshaguy@gmail.com',
          passwordHash:
            '000000100007a120e23d4549397ebd8c4ad74f59e95ba959af3613163076b9d4378030467cd14267f03d81fa180081553fa3911510d99f1e',
          aboutMe: 'Intelligent',
          occupation: 'Student',
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          firstname: 'Mimi',
          lastname: 'Shaguy',
          username: 'mimishaguy',
          email: 'mimishaguy@gmail.com',
          passwordHash:
            '000000100007a120367227e62db9771bb57c482ebc8050f2d4b068fe42a5d32dfaafde08305279848219a9457af1f3d58ba9e13d402fffc1',
          aboutMe: 'Born Leader',
          occupation: 'Student',
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          firstname: 'Bem',
          lastname: 'Shaguy',
          username: 'bemshaguy',
          email: 'bemshaguy@gmail.com',
          passwordHash:
            '000000100007a120dab0640a41e8aa6cd3ec4b55b26380f60933a5402625fe07a2f877c7a389bf69ab7f97c931cea8717092754dc09ce004',
          aboutMe: 'Soul Winner',
          occupation: 'Pastor',
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          firstname: 'Abosede',
          lastname: 'Shaguy',
          username: 'abosedeshaguy',
          email: 'boseshaguy@gmail.com',
          passwordHash:
            '000000100007a120151d4e1eb9d02e181a902e8338be4d9a74abd13856b5ace0bc2417bb21d310b6f3f5518e34669207eda670662dad556f',
          aboutMe: 'Strong Woman',
          occupation: 'Lecturer',
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          firstname: 'Terry',
          lastname: 'Shaguy',
          username: 'terryshaguy',
          email: 'terryshaguy@gmail.com',
          passwordHash:
            '000000100007a120a861b85463b8ae5d0357988e968f92e696f379477aeba09889321152fa24a7c533040213cd1eb1ae220126f830e31800',
          aboutMe: 'Minister of the Gospel',
          occupation: 'Writer',
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          firstname: 'Laruba',
          lastname: 'Adama',
          username: 'larubaadama',
          email: 'larubaadama@gmail.com',
          passwordHash:
            '000000100007a1206c773148ce8e6a0368751bb39a00eb003f183c92c41583bb4fc6e9d08fcd3e085190f576710edd2fa5ae1bb5809d210e',
          aboutMe: 'Non Conformist',
          occupation: 'Web Developer',
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          firstname: 'Joyce',
          lastname: 'Ayoola',
          username: 'joyceayoola',
          email: 'joyceayoola@gmail.com',
          passwordHash:
            '000000100007a120d02e3a421b082c8533cfe8b8c53efa4193a606623fac8d4437085d4a5efb6614c3b66d72804c7b7bf1d5fdb61706fb0e',
          aboutMe: 'Fashionista',
          occupation: 'Lecturer',
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          firstname: 'Emiola',
          lastname: 'Olasanmi',
          username: 'emiolaolasanmi',
          email: 'emiolaolasanmi@gmail.com',
          passwordHash:
            '000000100007a120e34a43fba0bf0c20d98bdc491b63300a722883411316026790aaa9bd15fd8c21eaf12e48034a0c6328cea73b37f14552',
          aboutMe: 'Food Lover',
          occupation: 'Fashion Designer',
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        }
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
