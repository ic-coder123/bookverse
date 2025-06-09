export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  genre: string;
  amazonUrl: string | null;
  averageRating: string;
  totalReviews: number;
  createdAt: Date;
}

export interface Review {
  id: number;
  bookId: number;
  content: string;
  rating: number;
  authorName: string;
  userId?: number;
  likes: number;
  dislikes: number;
  flags: number;
  isHidden: boolean;
  createdAt: Date;
}

export interface User {
  id: number;
  username: string;
  password: string;
  birthYear?: string;
  parentEmail?: string;
  isUnder13: boolean;
  parentConsent: boolean;
  createdAt: Date;
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  type: 'monthly' | 'yearly' | 'genre' | 'pages' | 'streak';
  target: number;
  startDate: Date;
  endDate: Date;
  badgeIcon: string;
  badgeColor: string;
  isActive: boolean;
  createdAt: Date;
}

export interface UserChallenge {
  id: number;
  userId: number;
  challengeId: number;
  progress: number;
  isCompleted: boolean;
  completedAt?: Date;
  joinedAt: Date;
}

export interface UserBadge {
  id: number;
  userId: number;
  challengeId: number;
  badgeIcon: string;
  badgeColor: string;
  badgeTitle: string;
  earnedAt: Date;
}

export interface IStorage {
  // User methods
  createUser(user: Omit<User, 'id' | 'createdAt'>): Promise<User>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserById(id: number): Promise<User | undefined>;
  upsertUser(user: any): Promise<User>;
  
  // Book methods
  getAllBooks(): Promise<Book[]>;
  getBook(id: number): Promise<Book | undefined>;
  createBook(book: Omit<Book, 'id' | 'createdAt' | 'averageRating' | 'totalReviews'>): Promise<Book>;
  updateBook(id: number, book: Partial<Omit<Book, 'id' | 'createdAt'>>): Promise<Book | undefined>;
  deleteBook(id: number): Promise<boolean>;
  
  // Review methods
  getReviewsByBookId(bookId: number): Promise<Review[]>;
  getAllReviews(): Promise<Review[]>;
  createReview(review: Omit<Review, 'id' | 'createdAt' | 'likes' | 'dislikes' | 'flags' | 'isHidden'>): Promise<Review>;
  deleteReview(id: number): Promise<boolean>;
  likeReview(reviewId: number): Promise<void>;
  dislikeReview(reviewId: number): Promise<void>;
  flagReview(reviewId: number): Promise<void>;
  hideReview(reviewId: number): Promise<void>;

  // Challenge methods
  getAllChallenges(): Promise<Challenge[]>;
  getActiveCurrentChallenges(): Promise<Challenge[]>;
  createChallenge(challenge: Omit<Challenge, 'id' | 'createdAt'>): Promise<Challenge>;
  updateChallenge(id: number, challenge: Partial<Omit<Challenge, 'id' | 'createdAt'>>): Promise<Challenge | undefined>;
  deleteChallenge(id: number): Promise<boolean>;
  getUserChallenges(userId: number): Promise<UserChallenge[]>;
  joinChallenge(userId: number, challengeId: number): Promise<UserChallenge>;
  updateChallengeProgress(userId: number, challengeId: number, progress: number): Promise<void>;
  getUserBadges(userId: number): Promise<UserBadge[]>;
  awardBadge(badge: Omit<UserBadge, 'id' | 'earnedAt'>): Promise<UserBadge>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User> = new Map();
  private books: Map<number, Book> = new Map();
  private reviews: Map<number, Review> = new Map();
  private challenges: Map<number, Challenge> = new Map();
  private userChallenges: Map<number, UserChallenge> = new Map();
  private userBadges: Map<number, UserBadge> = new Map();
  private currentUserId = 1;
  private currentBookId = 1;
  private currentReviewId = 1;
  private currentChallengeId = 1;
  private currentUserChallengeId = 1;
  private currentUserBadgeId = 1;

  // User operations
  async createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const currentYear = new Date().getFullYear();
    const userAge = userData.birthYear ? currentYear - parseInt(userData.birthYear) : null;
    const isUnder13 = userAge !== null && userAge < 13;
    
    const user: User = {
      ...userData,
      id: this.currentUserId++,
      isUnder13,
      parentConsent: userData.parentConsent || false,
      createdAt: new Date(),
    };
    
    this.users.set(user.id, user);
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async upsertUser(userData: any): Promise<User> {
    // This is a compatibility method for Replit Auth - not used in our simple auth
    const existingUser = await this.getUserByUsername(userData.username);
    if (existingUser) {
      return existingUser;
    }
    return this.createUser(userData);
  }

  // Book operations
  async getAllBooks(): Promise<Book[]> {
    return Array.from(this.books.values());
  }

  async getBook(id: number): Promise<Book | undefined> {
    return this.books.get(id);
  }

  async createBook(bookData: Omit<Book, 'id' | 'createdAt' | 'averageRating' | 'totalReviews'>): Promise<Book> {
    const book: Book = {
      ...bookData,
      id: this.currentBookId++,
      averageRating: "0",
      totalReviews: 0,
      createdAt: new Date(),
    };
    
    this.books.set(book.id, book);
    return book;
  }

  async getReviewsByBookId(bookId: number): Promise<Review[]> {
    return Array.from(this.reviews.values()).filter(review => review.bookId === bookId);
  }

  async updateBook(id: number, updateData: Partial<Omit<Book, 'id' | 'createdAt'>>): Promise<Book | undefined> {
    const book = this.books.get(id);
    if (!book) {
      return undefined;
    }
    
    const updatedBook = { ...book, ...updateData };
    this.books.set(id, updatedBook);
    return updatedBook;
  }

  async deleteBook(id: number): Promise<boolean> {
    const deleted = this.books.delete(id);
    if (deleted) {
      // Also delete all reviews for this book
      const reviewsToDelete = Array.from(this.reviews.values())
        .filter(review => review.bookId === id)
        .map(review => review.id);
      
      reviewsToDelete.forEach(reviewId => this.reviews.delete(reviewId));
    }
    return deleted;
  }

  async getAllReviews(): Promise<Review[]> {
    return Array.from(this.reviews.values());
  }

  async deleteReview(id: number): Promise<boolean> {
    const review = this.reviews.get(id);
    if (!review) {
      return false;
    }
    
    const deleted = this.reviews.delete(id);
    
    if (deleted) {
      // Update book's average rating and total reviews
      const book = this.books.get(review.bookId);
      if (book) {
        const bookReviews = await this.getReviewsByBookId(review.bookId);
        if (bookReviews.length === 0) {
          book.averageRating = "0";
          book.totalReviews = 0;
        } else {
          const totalRating = bookReviews.reduce((sum, r) => sum + r.rating, 0);
          const averageRating = (totalRating / bookReviews.length).toFixed(1);
          book.averageRating = averageRating;
          book.totalReviews = bookReviews.length;
        }
        this.books.set(book.id, book);
      }
    }
    
    return deleted;
  }

  async createReview(reviewData: Omit<Review, 'id' | 'createdAt' | 'likes' | 'dislikes' | 'flags' | 'isHidden'>): Promise<Review> {
    const review: Review = {
      ...reviewData,
      id: this.currentReviewId++,
      likes: 0,
      dislikes: 0,
      flags: 0,
      isHidden: false,
      createdAt: new Date(),
    };
    
    this.reviews.set(review.id, review);
    
    // Update book's average rating and total reviews
    const book = this.books.get(reviewData.bookId);
    if (book) {
      const bookReviews = await this.getReviewsByBookId(reviewData.bookId);
      const totalRating = bookReviews.reduce((sum, r) => sum + r.rating, 0);
      const averageRating = (totalRating / bookReviews.length).toFixed(1);
      
      book.averageRating = averageRating;
      book.totalReviews = bookReviews.length;
      this.books.set(book.id, book);
    }
    
    // Update reading challenge progress
    if (reviewData.userId) {
      await this.updateReadingProgress(reviewData.userId);
    }
    
    return review;
  }

  async likeReview(reviewId: number): Promise<void> {
    const review = this.reviews.get(reviewId);
    if (review) {
      review.likes += 1;
      this.reviews.set(reviewId, review);
    }
  }

  async dislikeReview(reviewId: number): Promise<void> {
    const review = this.reviews.get(reviewId);
    if (review) {
      review.dislikes += 1;
      this.reviews.set(reviewId, review);
    }
  }

  async flagReview(reviewId: number): Promise<void> {
    const review = this.reviews.get(reviewId);
    if (review) {
      review.flags += 1;
      this.reviews.set(reviewId, review);
    }
  }

  async hideReview(reviewId: number): Promise<void> {
    const review = this.reviews.get(reviewId);
    if (review) {
      review.isHidden = true;
      this.reviews.set(reviewId, review);
    }
  }

  // Challenge operations
  async getAllChallenges(): Promise<Challenge[]> {
    return Array.from(this.challenges.values());
  }

  async getActiveCurrentChallenges(): Promise<Challenge[]> {
    const now = new Date();
    return Array.from(this.challenges.values()).filter(challenge => 
      challenge.isActive && 
      challenge.startDate <= now && 
      challenge.endDate >= now
    );
  }

  async createChallenge(challengeData: Omit<Challenge, 'id' | 'createdAt'>): Promise<Challenge> {
    const challenge: Challenge = {
      ...challengeData,
      id: this.currentChallengeId++,
      createdAt: new Date(),
    };
    
    this.challenges.set(challenge.id, challenge);
    return challenge;
  }

  async updateChallenge(id: number, updateData: Partial<Omit<Challenge, 'id' | 'createdAt'>>): Promise<Challenge | undefined> {
    const challenge = this.challenges.get(id);
    if (!challenge) {
      return undefined;
    }

    const updatedChallenge: Challenge = {
      ...challenge,
      ...updateData,
    };

    this.challenges.set(id, updatedChallenge);
    return updatedChallenge;
  }

  async deleteChallenge(id: number): Promise<boolean> {
    const deleted = this.challenges.delete(id);
    
    // Also remove related user challenges and badges
    if (deleted) {
      // Remove user challenges for this challenge
      const userChallengesToDelete: number[] = [];
      this.userChallenges.forEach((userChallenge, ucId) => {
        if (userChallenge.challengeId === id) {
          userChallengesToDelete.push(ucId);
        }
      });
      userChallengesToDelete.forEach(ucId => this.userChallenges.delete(ucId));

      // Remove user badges for this challenge
      const userBadgesToDelete: number[] = [];
      this.userBadges.forEach((userBadge, ubId) => {
        if (userBadge.challengeId === id) {
          userBadgesToDelete.push(ubId);
        }
      });
      userBadgesToDelete.forEach(ubId => this.userBadges.delete(ubId));
    }
    
    return deleted;
  }

  async getUserChallenges(userId: number): Promise<UserChallenge[]> {
    return Array.from(this.userChallenges.values()).filter(uc => uc.userId === userId);
  }

  async joinChallenge(userId: number, challengeId: number): Promise<UserChallenge> {
    const existingChallenge = Array.from(this.userChallenges.values())
      .find(uc => uc.userId === userId && uc.challengeId === challengeId);
    
    if (existingChallenge) {
      return existingChallenge;
    }

    const userChallenge: UserChallenge = {
      id: this.currentUserChallengeId++,
      userId,
      challengeId,
      progress: 0,
      isCompleted: false,
      joinedAt: new Date(),
    };
    
    this.userChallenges.set(userChallenge.id, userChallenge);
    return userChallenge;
  }

  async updateChallengeProgress(userId: number, challengeId: number, progress: number): Promise<void> {
    const userChallenge = Array.from(this.userChallenges.values())
      .find(uc => uc.userId === userId && uc.challengeId === challengeId);
    
    if (userChallenge) {
      const challenge = this.challenges.get(challengeId);
      const updatedChallenge = {
        ...userChallenge,
        progress,
        isCompleted: progress >= (challenge?.target || 0),
        completedAt: progress >= (challenge?.target || 0) ? new Date() : undefined,
      };
      
      this.userChallenges.set(userChallenge.id, updatedChallenge);
      
      // Award badge if challenge completed
      if (updatedChallenge.isCompleted && challenge && !userChallenge.isCompleted) {
        await this.awardBadge({
          userId,
          challengeId,
          badgeIcon: challenge.badgeIcon,
          badgeColor: challenge.badgeColor,
          badgeTitle: challenge.title,
        });
      }
    }
  }

  async getUserBadges(userId: number): Promise<UserBadge[]> {
    return Array.from(this.userBadges.values()).filter(badge => badge.userId === userId);
  }

  async awardBadge(badgeData: Omit<UserBadge, 'id' | 'earnedAt'>): Promise<UserBadge> {
    const badge: UserBadge = {
      ...badgeData,
      id: this.currentUserBadgeId++,
      earnedAt: new Date(),
    };
    
    this.userBadges.set(badge.id, badge);
    return badge;
  }

  constructor() {
    this.initializeDefaultChallenges();
    this.initializeDefaultBooks();
  }

  private initializeDefaultChallenges() {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const endOfYear = new Date(now.getFullYear(), 11, 31);

    const defaultChallenges = [
      {
        title: "Book Explorer",
        description: "Read 5 books this month",
        type: "monthly" as const,
        target: 5,
        startDate: startOfMonth,
        endDate: endOfMonth,
        badgeIcon: "📚",
        badgeColor: "bg-blue-500",
        isActive: true,
      },
      {
        title: "Reading Enthusiast",
        description: "Complete 25 books this year",
        type: "yearly" as const,
        target: 25,
        startDate: startOfYear,
        endDate: endOfYear,
        badgeIcon: "🏆",
        badgeColor: "bg-yellow-500",
        isActive: true,
      },
      {
        title: "Quick Reader",
        description: "Read 3 books this month",
        type: "monthly" as const,
        target: 3,
        startDate: startOfMonth,
        endDate: endOfMonth,
        badgeIcon: "⚡",
        badgeColor: "bg-green-500",
        isActive: true,
      },
      {
        title: "Bookworm",
        description: "Maintain a 7-day reading streak",
        type: "streak" as const,
        target: 7,
        startDate: now,
        endDate: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
        badgeIcon: "🐛",
        badgeColor: "bg-purple-500",
        isActive: true,
      },
    ];

    defaultChallenges.forEach(challenge => {
      this.challenges.set(this.currentChallengeId, {
        ...challenge,
        id: this.currentChallengeId,
        createdAt: new Date(),
      });
      this.currentChallengeId++;
    });
  }

  private initializeDefaultBooks() {
    const defaultBooks = [
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        description: "The first book in the Harry Potter series follows Harry as he discovers he's a wizard and begins his magical education at Hogwarts School of Witchcraft and Wizardry.",
        coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg",
        genre: "Fantasy",
        amazonUrl: "https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/0439708184"
      },
      {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        description: "In a dystopian future, Katniss Everdeen volunteers for the Hunger Games to save her sister, sparking a revolution against the oppressive Capitol.",
        coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg",
        genre: "Young Adult",
        amazonUrl: "https://www.amazon.com/Hunger-Games-Suzanne-Collins/dp/0439023483"
      },
      {
        title: "Wonder",
        author: "R.J. Palacio",
        description: "August Pullman, born with facial differences, enters fifth grade at a mainstream elementary school and shows everyone that you can't blend in when you were born to stand out.",
        coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1309316972i/11387515.jpg",
        genre: "Children's Fiction",
        amazonUrl: "https://www.amazon.com/Wonder-R-J-Palacio/dp/0375869026"
      }
    ];

    defaultBooks.forEach(bookData => {
      const book: Book = {
        ...bookData,
        id: this.currentBookId++,
        averageRating: "4.5",
        totalReviews: 0,
        createdAt: new Date(),
      };
      this.books.set(book.id, book);
    });
  }

  private async updateReadingProgress(userId: number): Promise<void> {
    const userChallenges = await this.getUserChallenges(userId);
    const userReviews = Array.from(this.reviews.values()).filter(r => r.userId === userId);
    
    for (const userChallenge of userChallenges) {
      const challenge = this.challenges.get(userChallenge.challengeId);
      if (!challenge || userChallenge.isCompleted) continue;
      
      let progress = 0;
      
      switch (challenge.type) {
        case 'monthly':
        case 'yearly':
          // Count books read (reviews written) in the time period
          const relevantReviews = userReviews.filter(r => 
            r.createdAt >= challenge.startDate && r.createdAt <= challenge.endDate
          );
          progress = relevantReviews.length;
          break;
        case 'genre':
          // Count reviews for specific genre (simplified for now)
          progress = userReviews.length;
          break;
        case 'streak':
          // Calculate reading streak (simplified)
          progress = Math.min(userReviews.length, challenge.target);
          break;
      }
      
      await this.updateChallengeProgress(userId, userChallenge.challengeId, progress);
    }
  }
}

// MongoDB Storage Implementation
import { getDatabase } from "./db";
import { ObjectId } from "mongodb";

export class MongoStorage implements IStorage {
  private async getCollection(name: string) {
    const db = await getDatabase();
    if (!db) {
      throw new Error("Database not available");
    }
    return db.collection(name);
  }

  // User methods
  async createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const users = await this.getCollection('users');
    const user = {
      ...userData,
      createdAt: new Date(),
    };
    const result = await users.insertOne(user);
    return { ...user, id: result.insertedId.toString() as any };
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const users = await this.getCollection('users');
    const user = await users.findOne({ username });
    if (!user) return undefined;
    const { _id, ...userData } = user;
    return { ...userData, id: _id.toString() as any };
  }

  async getUserById(id: number): Promise<User | undefined> {
    const users = await this.getCollection('users');
    const user = await users.findOne({ _id: new ObjectId(id.toString()) });
    if (!user) return undefined;
    const { _id, ...userData } = user;
    return { ...userData, id: _id.toString() as any };
  }

  async upsertUser(userData: any): Promise<User> {
    const users = await this.getCollection('users');
    const existingUser = await users.findOne({ username: userData.username });
    
    if (existingUser) {
      await users.updateOne(
        { _id: existingUser._id },
        { $set: { ...userData, updatedAt: new Date() } }
      );
      return { ...existingUser, ...userData, id: existingUser._id.toString() as any };
    } else {
      return await this.createUser(userData);
    }
  }

  // Book methods
  async getAllBooks(): Promise<Book[]> {
    const books = await this.getCollection('books');
    const bookList = await books.find({}).toArray();
    return bookList.map(book => {
      const { _id, ...bookData } = book;
      return { ...bookData, id: _id.toString() as any };
    });
  }

  async getBook(id: number): Promise<Book | undefined> {
    const books = await this.getCollection('books');
    const book = await books.findOne({ _id: new ObjectId(id.toString()) });
    if (!book) return undefined;
    const { _id, ...bookData } = book;
    return { ...bookData, id: _id.toString() as any };
  }

  async createBook(bookData: Omit<Book, 'id' | 'createdAt' | 'averageRating' | 'totalReviews'>): Promise<Book> {
    const books = await this.getCollection('books');
    const book = {
      ...bookData,
      averageRating: "0.0",
      totalReviews: 0,
      createdAt: new Date(),
    };
    const result = await books.insertOne(book);
    return { ...book, id: result.insertedId.toString() as any };
  }

  async updateBook(id: number, updateData: Partial<Omit<Book, 'id' | 'createdAt'>>): Promise<Book | undefined> {
    const books = await this.getCollection('books');
    await books.updateOne(
      { _id: new ObjectId(id.toString()) },
      { $set: updateData }
    );
    return await this.getBook(id);
  }

  async deleteBook(id: number): Promise<boolean> {
    const books = await this.getCollection('books');
    const result = await books.deleteOne({ _id: new ObjectId(id.toString()) });
    return result.deletedCount > 0;
  }

  // Review methods
  async getReviewsByBookId(bookId: number): Promise<Review[]> {
    const reviews = await this.getCollection('reviews');
    const reviewList = await reviews.find({ bookId: bookId.toString() }).toArray();
    return reviewList.map(review => ({ ...review, id: review._id.toString() as any, bookId: parseInt(review.bookId) }));
  }

  async getAllReviews(): Promise<Review[]> {
    const reviews = await this.getCollection('reviews');
    const reviewList = await reviews.find({}).toArray();
    return reviewList.map(review => ({ ...review, id: review._id.toString() as any, bookId: parseInt(review.bookId) }));
  }

  async createReview(reviewData: Omit<Review, 'id' | 'createdAt' | 'likes' | 'dislikes' | 'flags' | 'isHidden'>): Promise<Review> {
    const reviews = await this.getCollection('reviews');
    const review = {
      ...reviewData,
      bookId: reviewData.bookId.toString(),
      likes: 0,
      dislikes: 0,
      flags: 0,
      isHidden: false,
      createdAt: new Date(),
    };
    const result = await reviews.insertOne(review);
    return { ...review, id: result.insertedId.toString() as any, bookId: reviewData.bookId };
  }

  async deleteReview(id: number): Promise<boolean> {
    const reviews = await this.getCollection('reviews');
    const result = await reviews.deleteOne({ _id: new ObjectId(id.toString()) });
    return result.deletedCount > 0;
  }

  async likeReview(reviewId: number): Promise<void> {
    const reviews = await this.getCollection('reviews');
    await reviews.updateOne(
      { _id: new ObjectId(reviewId.toString()) },
      { $inc: { likes: 1 } }
    );
  }

  async dislikeReview(reviewId: number): Promise<void> {
    const reviews = await this.getCollection('reviews');
    await reviews.updateOne(
      { _id: new ObjectId(reviewId.toString()) },
      { $inc: { dislikes: 1 } }
    );
  }

  async flagReview(reviewId: number): Promise<void> {
    const reviews = await this.getCollection('reviews');
    await reviews.updateOne(
      { _id: new ObjectId(reviewId.toString()) },
      { $inc: { flags: 1 } }
    );
  }

  async hideReview(reviewId: number): Promise<void> {
    const reviews = await this.getCollection('reviews');
    await reviews.updateOne(
      { _id: new ObjectId(reviewId.toString()) },
      { $set: { isHidden: true } }
    );
  }

  // Challenge methods
  async getAllChallenges(): Promise<Challenge[]> {
    const challenges = await this.getCollection('challenges');
    const challengeList = await challenges.find({}).toArray();
    return challengeList.map(challenge => ({ ...challenge, id: challenge._id.toString() as any }));
  }

  async getActiveCurrentChallenges(): Promise<Challenge[]> {
    const challenges = await this.getCollection('challenges');
    const now = new Date();
    const challengeList = await challenges.find({
      isActive: true,
      startDate: { $lte: now },
      endDate: { $gte: now }
    }).toArray();
    return challengeList.map(challenge => ({ ...challenge, id: challenge._id.toString() as any }));
  }

  async createChallenge(challengeData: Omit<Challenge, 'id' | 'createdAt'>): Promise<Challenge> {
    const challenges = await this.getCollection('challenges');
    const challenge = {
      ...challengeData,
      createdAt: new Date(),
    };
    const result = await challenges.insertOne(challenge);
    return { ...challenge, id: result.insertedId.toString() as any };
  }

  async updateChallenge(id: number, updateData: Partial<Omit<Challenge, 'id' | 'createdAt'>>): Promise<Challenge | undefined> {
    const challenges = await this.getCollection('challenges');
    await challenges.updateOne(
      { _id: new ObjectId(id.toString()) },
      { $set: updateData }
    );
    const updated = await challenges.findOne({ _id: new ObjectId(id.toString()) });
    if (!updated) return undefined;
    return { ...updated, id: updated._id.toString() as any };
  }

  async deleteChallenge(id: number): Promise<boolean> {
    const challenges = await this.getCollection('challenges');
    const result = await challenges.deleteOne({ _id: new ObjectId(id.toString()) });
    return result.deletedCount > 0;
  }

  async getUserChallenges(userId: number): Promise<UserChallenge[]> {
    const userChallenges = await this.getCollection('userChallenges');
    const challengeList = await userChallenges.find({ userId: userId.toString() }).toArray();
    return challengeList.map(uc => ({ ...uc, id: uc._id.toString() as any, userId: parseInt(uc.userId), challengeId: parseInt(uc.challengeId) }));
  }

  async joinChallenge(userId: number, challengeId: number): Promise<UserChallenge> {
    const userChallenges = await this.getCollection('userChallenges');
    const userChallenge = {
      userId: userId.toString(),
      challengeId: challengeId.toString(),
      progress: 0,
      isCompleted: false,
      joinedAt: new Date(),
    };
    const result = await userChallenges.insertOne(userChallenge);
    return { ...userChallenge, id: result.insertedId.toString() as any, userId, challengeId };
  }

  async updateChallengeProgress(userId: number, challengeId: number, progress: number): Promise<void> {
    const userChallenges = await this.getCollection('userChallenges');
    await userChallenges.updateOne(
      { userId: userId.toString(), challengeId: challengeId.toString() },
      { $set: { progress } }
    );
  }

  async getUserBadges(userId: number): Promise<UserBadge[]> {
    const userBadges = await this.getCollection('userBadges');
    const badgeList = await userBadges.find({ userId: userId.toString() }).toArray();
    return badgeList.map(badge => ({ ...badge, id: badge._id.toString() as any, userId: parseInt(badge.userId), challengeId: parseInt(badge.challengeId) }));
  }

  async awardBadge(badgeData: Omit<UserBadge, 'id' | 'earnedAt'>): Promise<UserBadge> {
    const userBadges = await this.getCollection('userBadges');
    const badge = {
      ...badgeData,
      userId: badgeData.userId.toString(),
      challengeId: badgeData.challengeId.toString(),
      earnedAt: new Date(),
    };
    const result = await userBadges.insertOne(badge);
    return { ...badge, id: result.insertedId.toString() as any, userId: badgeData.userId, challengeId: badgeData.challengeId };
  }
}

// Create storage instance with MongoDB fallback to in-memory
export const storage = process.env.MONGODB_URI ? new MongoStorage() : new MemStorage();
