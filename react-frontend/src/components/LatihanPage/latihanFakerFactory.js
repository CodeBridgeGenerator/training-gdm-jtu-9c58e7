
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
nomborRujukan: faker.lorem.sentence(1),
tajuk: faker.lorem.sentence(1),
kategori: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
