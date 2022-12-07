// Mock object represent database data
import { EEntityState, EEntityType } from "@/types/enums";
import type { IModule, ITheme, IVideo, ITest } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";

/**
 * MODULES
 */
const modules: IModule[] | undefined = [];
modules.push(
  {
    id: 1,
    type: EEntityType.Modules,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 1",
    header: "Основы предпринимательства",
    title: "Модуль 1",
    duration: "2 часа",
    footer: "Изучить модуль",
    state: EEntityState.Active,
  },
  {
    id: 2,
    type: EEntityType.Modules,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 2",
    header: "Грантовое проектирование",
    title: "Модуль 2",
    duration: "1 час 20 минут",
    footer: "Изучить модуль",
    state: EEntityState.Default,
  },
  {
    id: 3,
    type: EEntityType.Modules,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 3",
    header: "Технологическое предпринимательство",
    title: "Модуль 3",
    duration: "2 часа 15 минут",
    footer: "Изучить модуль",
    state: EEntityState.Default,
  },
  {
    id: 4,
    type: EEntityType.Modules,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 4",
    header: "Массовое предпринимательство",
    title: "Модуль 4",
    duration: "43 минуты",
    footer: "Изучить модуль",
    state: EEntityState.Default,
  },
  {
    id: 5,
    type: EEntityType.Modules,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 5",
    header: "Креативные индустрии",
    title: "Модуль 5",
    duration: "37 минут",
    footer: "Изучить модуль",
    state: EEntityState.Default,
  },
  {
    id: 6,
    type: EEntityType.Modules,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 6",
    header: "Социальное предпринимательство",
    title: "Модуль 6",
    duration: "2 часа 7 минут",
    footer: "Изучить модуль",
    state: EEntityState.Default,
  },
  {
    id: 7,
    type: EEntityType.Modules,
    src: "https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg",
    alt: "Модуль 7",
    header: "Итоговое тестирование",
    title: "Модуль 7",
    duration: "30 минут",
    footer: "Изучить модуль",
    state: EEntityState.Default,
  }
);

/**
 * THEMES
 */
const themes: TElemsList<number, ITheme> | undefined = new Map();
// module 1
themes.set(1, [
  {
    id: 1,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "topic 1 theme 1",
  },
  {
    id: 2,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "two",
  },
  {
    id: 3,
    type: EEntityType.Topics,
    state: EEntityState.Active,
    title: "sdfg",
  },
  {
    id: 4,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "fghjfhj",
  },
  {
    id: 5,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "zxcv",
  },
  {
    id: 6,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "345345",
  },
  {
    id: 7,
    type: EEntityType.Tests,
    state: EEntityState.Default,
    title: "Тестирование 1",
  },
  {
    id: 8,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 9,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "234",
  },
  {
    id: 10,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
  {
    id: 11,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "Интересная тема",
  },
  {
    id: 12,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "zxcv",
  },
  {
    id: 13,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "345345",
  },
  {
    id: 14,
    type: EEntityType.Tests,
    state: EEntityState.Default,
    title: "Тестирование 2",
  },
  {
    id: 15,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 16,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "234",
  },
  {
    id: 17,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
  {
    id: 18,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "одиннадцать 1",
  },
  {
    id: 19,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1",
  },
  {
    id: 20,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "11",
  },
  {
    id: 21,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "111",
  },
  {
    id: 22,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1e4 1",
  },
  {
    id: 23,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1e5 1",
  },
  {
    id: 24,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1е6 1",
  },
  {
    id: 25,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1e7 1",
  },
  {
    id: 26,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1e8 1",
  },
  {
    id: 27,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1e9 1",
  },
  {
    id: 28,
    type: EEntityType.Tests,
    state: EEntityState.Default,
    title: "Тестирование 3",
  },
]);

// module 2
themes.set(2, [
  {
    id: 29,
    type: EEntityType.Topics,
    state: EEntityState.Active,
    title: "topic 2 theme 1",
  },
  {
    id: 30,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "two",
  },
  {
    id: 31,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "sdfg",
  },
  {
    id: 32,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "fghjfhj",
  },
  {
    id: 33,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "zxcv",
  },
  {
    id: 34,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "345345",
  },
  {
    id: 35,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "7",
  },
  {
    id: 36,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 37,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "234",
  },
  {
    id: 38,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
  {
    id: 39,
    type: EEntityType.Tests,
    state: EEntityState.Default,
    title: "Тестирование 2",
  },
]);

// module 3
themes.set(3, [
  {
    id: 40,
    type: EEntityType.Topics,
    state: EEntityState.Active,
    title: "topic 3 theme 1",
  },
  {
    id: 41,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "two",
  },
  {
    id: 42,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "sdfg",
  },
  {
    id: 43,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "fghjfhj",
  },
  {
    id: 44,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "zxcv",
  },
  {
    id: 45,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "345345",
  },
  {
    id: 46,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "7",
  },
  {
    id: 47,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 48,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "234",
  },
  {
    id: 49,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
  {
    id: 50,
    type: EEntityType.Tests,
    state: EEntityState.Default,
    title: "Тестирование 3",
  },
]);

// module 4
themes.set(4, [
  {
    id: 51,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "topic 4 theme 1",
  },
  {
    id: 52,
    type: EEntityType.Topics,
    state: EEntityState.Active,
    title: "topic 4 theme 2",
  },
  {
    id: 53,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "sdfg",
  },
  {
    id: 54,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "fghjfhj",
  },
  {
    id: 55,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "zxcv",
  },
  {
    id: 56,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "345345",
  },
  {
    id: 57,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "7",
  },
  {
    id: 58,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 59,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "234",
  },
  {
    id: 60,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
  {
    id: 61,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "что-то ещё",
  },
  {
    id: 62,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 63,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "234",
  },
  {
    id: 64,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
  {
    id: 65,
    type: EEntityType.Tests,
    state: EEntityState.Default,
    title: "Тестирование 4",
  },
]);

// module 5
themes.set(5, [
  {
    id: 66,
    type: EEntityType.Topics,
    state: EEntityState.Active,
    title: "topic 5 theme 1",
  },
  {
    id: 67,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "two",
  },
  {
    id: 68,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "sdfg",
  },
  {
    id: 69,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "fghjfhj",
  },
  {
    id: 70,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "zxcv",
  },
  {
    id: 71,
    type: EEntityType.Tests,
    state: EEntityState.Default,
    title: "Тестирование 5",
  },
]);

// module 6
themes.set(6, [
  {
    id: 72,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "topic 6 theme 1",
  },
  {
    id: 73,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "two",
  },
  {
    id: 74,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "345345",
  },
  {
    id: 75,
    type: EEntityType.Topics,
    state: EEntityState.Active,
    title: "topic 6 theme 4",
  },
  {
    id: 76,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 77,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "234",
  },
  {
    id: 78,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
  {
    id: 79,
    type: EEntityType.Tests,
    state: EEntityState.Default,
    title: "Тестирование 6",
  },
]);

// module 7
themes.set(7, [
  {
    id: 80,
    type: EEntityType.Tests,
    state: EEntityState.Active,
    title: "test 7 theme 1",
  },
]);

/**
 * VIDEOS
 */
const videos: TElemsList<number, IVideo> | undefined = new Map();
// module 1
videos.set(1, [
  {
    id: 1,
    type: EEntityType.Videos,
    src: "https://vk.com/video-30836025_456239619",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 1",
  },
  {
    id: 2,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 2",
  },
  {
    id: 3,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Active,
    title: "video title module 1 videos id 3",
  },
  {
    id: 4,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 4",
  },
  {
    id: 5,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 5",
  },
  {
    id: 6,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 6",
  },
  {
    id: 8,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 8",
  },
  {
    id: 9,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 9",
  },
  {
    id: 10,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 10",
  },
  {
    id: 11,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 11",
  },
  {
    id: 12,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 12",
  },
  {
    id: 13,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 13",
  },
  {
    id: 15,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 15",
  },
  {
    id: 16,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 16",
  },
  {
    id: 17,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 17",
  },
  {
    id: 18,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 18",
  },
  {
    id: 19,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 19",
  },
  {
    id: 20,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 20",
  },
  {
    id: 21,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 21",
  },
  {
    id: 22,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 22",
  },
  {
    id: 23,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 23",
  },
  {
    id: 24,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 24",
  },
  {
    id: 25,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 25",
  },
  {
    id: 26,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 26",
  },
  {
    id: 27,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 1 videos id 27",
  },
]);

// module 2
videos.set(2, [
  {
    id: 29,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Active,
    title: "video title module 2 videos id 29",
  },
  {
    id: 30,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 2 videos id 30",
  },
  {
    id: 31,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 2 videos id 31",
  },
  {
    id: 32,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 2 videos id 32",
  },
  {
    id: 33,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 2 videos id 33",
  },
  {
    id: 34,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 2 videos id 34",
  },
  {
    id: 35,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 2 videos id 35",
  },
  {
    id: 36,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 2 videos id 36",
  },
  {
    id: 37,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 2 videos id 37",
  },
  {
    id: 38,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 2 videos id 38",
  },
]);

// module 3
videos.set(3, [
  {
    id: 40,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Active,
    title: "video title module 3 videos theme 1 id 40",
  },
  {
    id: 41,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 3 videos theme 2 id 41",
  },
  {
    id: 42,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 3 videos theme 3 id 42",
  },
  {
    id: 43,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 3 videos id 43",
  },
  {
    id: 44,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 3 videos id 44",
  },
  {
    id: 45,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 3 videos id 45",
  },
  {
    id: 46,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 3 videos id 46",
  },
  {
    id: 47,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 3 videos id 47",
  },
  {
    id: 48,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 3 videos id 48",
  },
  {
    id: 49,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 3 videos id 49",
  },
]);

// module 4
videos.set(4, [
  {
    id: 51,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 4 videos id 51",
  },
  {
    id: 52,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Active,
    title: "video title module 4 videos id 52",
  },
  {
    id: 53,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 4 videos id 53",
  },
  {
    id: 54,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 4 videos id 54",
  },
  {
    id: 55,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 4 videos id 55",
  },
  {
    id: 56,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 4 videos id 56",
  },
  {
    id: 57,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 4 videos id 57",
  },
  {
    id: 58,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 4 videos id 58",
  },
  {
    id: 59,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 4 videos id 59",
  },
  {
    id: 60,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 4 videos id 60",
  },
  {
    id: 61,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 4 videos id 61",
  },
  {
    id: 62,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 4 videos id 62",
  },
  {
    id: 63,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 4 videos id 63",
  },
  {
    id: 64,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 4 videos id 64",
  },
]);

// module 5
videos.set(5, [
  {
    id: 66,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Active,
    title: "video title module 5 videos id 66",
  },
  {
    id: 67,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 5 videos id 67",
  },
  {
    id: 68,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 5 videos id 68",
  },
  {
    id: 69,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 5 videos id 69",
  },
  {
    id: 70,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 5 videos id 70",
  },
]);

// module 6
videos.set(6, [
  {
    id: 72,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 6 videos id 72",
  },
  {
    id: 73,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 6 videos id 73",
  },
  {
    id: 74,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 6 videos id 74",
  },
  {
    id: 75,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Active,
    title: "video title module 6 videos id 75",
  },
  {
    id: 76,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 6 videos id 76",
  },
  {
    id: 77,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 6 videos id 77",
  },
  {
    id: 78,
    type: EEntityType.Videos,
    src: "https://www.youtube.com/watch?v=0ysi6DkeGmc",
    videoType: 'video/ogg; codecs="theora, vorbis"',
    state: EEntityState.Default,
    title: "video title module 6 videos id 78",
  },
]);

/**
 * TESTS
 */
const tests: TElemsList<number, ITest> | undefined = new Map();
// module 1
tests.set(1, [
  {
    id: 7,
    type: EEntityType.Tests,
    title: "Заголовок первого теста id 7",
    description: "Описание первого теста",
    state: EEntityState.Active,
  },
  {
    id: 14,
    type: EEntityType.Tests,
    title: "Заголовок второго теста id 14",
    description: "Описание второго теста",
    state: EEntityState.Default,
  },
  {
    id: 28,
    type: EEntityType.Tests,
    title: "Заголовок третьего теста id 28",
    description: "Описание третьего теста",
    state: EEntityState.Default,
  },
]);
// module 2
tests.set(2, [
  {
    id: 39,
    type: EEntityType.Tests,
    title: "Заголовок четвёртого теста id 39",
    description: "Описание четвёртого теста",
    state: EEntityState.Active,
  },
]);

const DB = { modules, themes, videos, tests };

export { DB };
