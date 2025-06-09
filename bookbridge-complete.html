<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BookBridge - Discover Your Next Great Read</title>
    <meta name="description" content="BookBridge connects readers with honest book reviews and reading challenges. Discover your next great read with our COPPA-compliant community platform.">
    <meta property="og:title" content="BookBridge - Book Review Platform">
    <meta property="og:description" content="Join thousands of readers sharing honest reviews and discovering amazing books">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://bookbridge.netlify.app">
    <meta property="og:image" content="https://bookbridge.netlify.app/og-image.jpg">
    
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Serif+Pro:wght@400;600;700&display=swap');
        
        body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Source Serif Pro', serif;
            font-weight: 600;
            line-height: 1.2;
        }
        
        .btn-primary {
            background-color: #2C5530;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 500;
            transition: all 0.2s ease;
        }
        
        .btn-primary:hover {
            background-color: #1a3520;
            transform: translateY(-1px);
        }
        
        .card {
            background-color: white;
            border: 1px solid #e5e7eb;
            border-radius: 0.75rem;
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
        }
        
        .card:hover {
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            transition: box-shadow 0.2s ease;
        }
        
        .star-rating {
            color: #fbbf24;
            font-size: 1.125rem;
        }
        
        .nav-link {
            padding: 0.75rem 1rem;
            border-radius: 0.375rem;
            font-weight: 500;
            transition: all 0.2s ease;
        }
        
        .nav-link:hover {
            background-color: #f3f4f6;
            color: #2C5530;
        }
        
        .nav-link.active {
            background-color: rgba(44, 85, 48, 0.1);
            color: #2C5530;
            font-weight: 600;
        }
    </style>
</head>
<body class="bg-gray-50">
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        const sampleBooks = [
            {
                id: 1,
                title: "Harry Potter and the Sorcerer's Stone",
                author: "J.K. Rowling",
                description: "The first book in the beloved Harry Potter series follows young Harry as he discovers the magical world of Hogwarts School of Witchcraft and Wizardry.",
                coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
                genre: "Fantasy",
                amazonUrl: "https://amazon.com/harry-potter-sorcerers-stone",
                averageRating: "4.8",
                totalReviews: 2847
            },
            {
                id: 2,
                title: "The Hunger Games",
                author: "Suzanne Collins",
                description: "In a dystopian future, Katniss Everdeen volunteers to take her sister's place in the deadly Hunger Games competition.",
                coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
                genre: "Young Adult",
                amazonUrl: "https://amazon.com/hunger-games",
                averageRating: "4.6",
                totalReviews: 1923
            },
            {
                id: 3,
                title: "Wonder",
                author: "R.J. Palacio",
                description: "August Pullman was born with a facial difference that has prevented him from going to mainstream school—until now.",
                coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
                genre: "Children's Fiction",
                amazonUrl: "https://amazon.com/wonder-rj-palacio",
                averageRating: "4.9",
                totalReviews: 3251
            }
        ];

        const challenges = [
            {
                id: 1,
                title: "Book Explorer",
                description: "Read books from 5 different genres",
                type: "genre",
                target: 5,
                badgeIcon: "🌟",
                badgeColor: "#D4AF37",
                progress: 0,
                isActive: true
            },
            {
                id: 2,
                title: "Reading Streak",
                description: "Read for 30 consecutive days",
                type: "streak",
                target: 30,
                badgeIcon: "🔥",
                badgeColor: "#FF6B35",
                progress: 0,
                isActive: true
            },
            {
                id: 3,
                title: "Page Turner",
                description: "Read 1000 pages this month",
                type: "pages",
                target: 1000,
                badgeIcon: "📚",
                badgeColor: "#2C5530",
                progress: 0,
                isActive: true
            }
        ];

        function BookBridge() {
            const [currentView, setCurrentView] = useState('home');
            const [selectedBook, setSelectedBook] = useState(null);
            const [isSignedIn, setIsSignedIn] = useState(false);
            const [currentUser, setCurrentUser] = useState(null);
            const [isAdmin, setIsAdmin] = useState(false);
            const [showAdminLogin, setShowAdminLogin] = useState(false);
            const [showUserAuth, setShowUserAuth] = useState(false);
            const [authMode, setAuthMode] = useState('login');
            const [userBadgeCount, setUserBadgeCount] = useState(0);
            const [books, setBooks] = useState(sampleBooks);
            const [userChallenges, setUserChallenges] = useState([]);

            const Navigation = () => (
                <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center">
                                <h1 className="text-2xl font-bold text-green-800 cursor-pointer" onClick={() => setCurrentView('home')}>
                                    📚 BookBridge
                                </h1>
                            </div>
                            
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={() => setCurrentView('home')}
                                        className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
                                    >
                                        Home
                                    </button>
                                    <button
                                        onClick={() => setCurrentView('browse')}
                                        className={`nav-link ${currentView === 'browse' ? 'active' : ''}`}
                                    >
                                        Browse Books
                                    </button>
                                    <button
                                        onClick={() => setCurrentView('about')}
                                        className={`nav-link ${currentView === 'about' ? 'active' : ''}`}
                                    >
                                        About
                                    </button>
                                    {isSignedIn && (
                                        <button
                                            onClick={() => setCurrentView('challenges')}
                                            className={`nav-link ${currentView === 'challenges' ? 'active' : ''}`}
                                        >
                                            Challenges {userBadgeCount > 0 && <span className="ml-1 bg-green-600 text-white rounded-full px-2 py-1 text-xs">{userBadgeCount}</span>}
                                        </button>
                                    )}
                                </div>

                                <div className="flex items-center space-x-3">
                                    {!isSignedIn ? (
                                        <>
                                            <button
                                                onClick={() => {
                                                    setAuthMode('login');
                                                    setShowUserAuth(true);
                                                }}
                                                className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium"
                                            >
                                                Sign In
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setAuthMode('register');
                                                    setShowUserAuth(true);
                                                }}
                                                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                                            >
                                                Sign Up
                                            </button>
                                        </>
                                    ) : (
                                        <div className="flex items-center space-x-3">
                                            <span className="text-gray-700 text-sm">Welcome, {currentUser?.username}!</span>
                                            <button
                                                onClick={() => {
                                                    setIsSignedIn(false);
                                                    setCurrentUser(null);
                                                    setIsAdmin(false);
                                                    setCurrentView('home');
                                                }}
                                                className="text-gray-500 hover:text-gray-700 text-sm"
                                            >
                                                Sign Out
                                            </button>
                                        </div>
                                    )}
                                    
                                    <button
                                        onClick={() => setShowAdminLogin(true)}
                                        className="text-xs text-gray-400 hover:text-gray-600 ml-2"
                                    >
                                        Admin
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            );

            const HomePage = () => (
                <div className="min-h-screen bg-gray-50">
                    <Navigation />
                    
                    {/* Hero Section */}
                    <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Discover Your Next<br />Great Read
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
                                {isSignedIn 
                                    ? "Welcome back! Add new books and share your reviews with the community." 
                                    : "Join thousands of readers sharing honest reviews and discovering amazing books"
                                }
                            </p>
                        </div>
                    </section>

                    {/* Featured Books */}
                    <section className="py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-800">Featured Books</h2>
                                {isAdmin && (
                                    <button
                                        onClick={() => setCurrentView('addBook')}
                                        className="btn-primary"
                                    >
                                        Add Book
                                    </button>
                                )}
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {books.map((book) => (
                                    <div
                                        key={book.id}
                                        className="card overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                                        onClick={() => {
                                            setSelectedBook(book);
                                            setCurrentView('bookDetail');
                                        }}
                                    >
                                        <img 
                                            src={book.coverImage} 
                                            alt={`${book.title} cover`} 
                                            className="w-full h-80 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="font-bold text-lg mb-2 text-gray-800">{book.title}</h3>
                                            <p className="text-gray-600 text-sm mb-3">{book.author}</p>
                                            <div className="flex items-center mb-3">
                                                <span className="star-rating">★★★★★</span>
                                                <span className="ml-2 text-gray-600 text-sm">
                                                    {book.averageRating} ({book.totalReviews} reviews)
                                                </span>
                                            </div>
                                            <button className="w-full bg-green-800 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                                                View Reviews
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Call to Action for Non-Signed In Users */}
                    {!isSignedIn && (
                        <section className="py-16 bg-gray-50">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center bg-white rounded-xl shadow-lg p-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Join the Reading Community</h3>
                                    <p className="text-gray-600 mb-6">
                                        Sign up to track your progress, earn badges, and compete with fellow readers!
                                    </p>
                                    <button
                                        onClick={() => {
                                            setAuthMode('register');
                                            setShowUserAuth(true);
                                        }}
                                        className="btn-primary text-lg"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            );

            const AboutPage = () => (
                <div className="min-h-screen bg-gray-50">
                    <Navigation />
                    
                    <main className="py-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h1 className="text-4xl font-bold text-gray-800 mb-6">About BookBridge</h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    We're passionate about connecting readers with books that inspire, educate, and entertain. 
                                    Our mission is to build a community where honest reviews help everyone discover their next great read.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                <div className="text-center">
                                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">📚</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Curated Reviews</h3>
                                    <p className="text-gray-600">Authentic reviews from real readers to help you make informed choices.</p>
                                </div>
                                
                                <div className="text-center">
                                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">🏆</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Reading Challenges</h3>
                                    <p className="text-gray-600">Join challenges, earn badges, and track your reading progress.</p>
                                </div>
                                
                                <div className="text-center">
                                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">👥</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Safe Community</h3>
                                    <p className="text-gray-600">COPPA-compliant platform with parental controls for young readers.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
                                <div className="text-gray-600 space-y-4">
                                    <p>
                                        BookBridge was created to solve a simple problem: finding your next great read shouldn't be difficult. 
                                        We believe that the best book recommendations come from fellow readers who share honest, thoughtful reviews.
                                    </p>
                                    <p>
                                        Our platform is designed with safety and community in mind. We're COPPA-compliant, ensuring that young 
                                        readers can safely explore and share their love of books with appropriate oversight and protection.
                                    </p>
                                    <p>
                                        Whether you're a parent looking for age-appropriate books for your child, a teacher building a classroom 
                                        library, or simply a book lover seeking your next adventure, BookBridge is here to help you discover 
                                        stories that matter.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            );

            const ChallengesPage = () => (
                <div className="min-h-screen bg-gray-50">
                    <Navigation />
                    
                    <main className="py-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h1 className="text-4xl font-bold text-gray-800 mb-6">Reading Challenges</h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Take on reading challenges to earn badges and track your progress!
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {challenges.map((challenge) => (
                                    <div key={challenge.id} className="card p-6">
                                        <div className="text-center mb-4">
                                            <div className="text-4xl mb-2">{challenge.badgeIcon}</div>
                                            <h3 className="text-xl font-bold text-gray-800">{challenge.title}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4 text-center">{challenge.description}</p>
                                        <div className="mb-4">
                                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                <span>Progress</span>
                                                <span>{challenge.progress} / {challenge.target}</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div 
                                                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <button className="w-full btn-primary">
                                            {challenge.progress === challenge.target ? 'Completed!' : 'Join Challenge'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            );

            const AuthModal = () => {
                const [formData, setFormData] = useState({
                    username: '',
                    password: '',
                    birthYear: '',
                    parentEmail: '',
                    parentConsent: false
                });

                const handleSubmit = (e) => {
                    e.preventDefault();
                    if (authMode === 'register') {
                        const age = new Date().getFullYear() - parseInt(formData.birthYear);
                        if (age < 13 && !formData.parentConsent) {
                            alert('Parental consent is required for users under 13.');
                            return;
                        }
                    }
                    
                    setCurrentUser({ id: 1, username: formData.username });
                    setIsSignedIn(true);
                    setShowUserAuth(false);
                    setFormData({ username: '', password: '', birthYear: '', parentEmail: '', parentConsent: false });
                };

                if (!showUserAuth) return null;

                return (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                            <h2 className="text-2xl font-bold mb-6">
                                {authMode === 'login' ? 'Sign In' : 'Create Account'}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.username}
                                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                    <input
                                        type="password"
                                        required
                                        value={formData.password}
                                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                </div>
                                {authMode === 'register' && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Birth Year</label>
                                            <input
                                                type="number"
                                                required
                                                min="1900"
                                                max={new Date().getFullYear()}
                                                value={formData.birthYear}
                                                onChange={(e) => setFormData({...formData, birthYear: e.target.value})}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            />
                                        </div>
                                        {formData.birthYear && (new Date().getFullYear() - parseInt(formData.birthYear)) < 13 && (
                                            <>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Parent's Email</label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={formData.parentEmail}
                                                        onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                    />
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        required
                                                        checked={formData.parentConsent}
                                                        onChange={(e) => setFormData({...formData, parentConsent: e.target.checked})}
                                                        className="mr-2"
                                                    />
                                                    <label className="text-sm text-gray-700">
                                                        I confirm that I have parental consent to create this account
                                                    </label>
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                                <div className="flex space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowUserAuth(false)}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="flex-1 btn-primary">
                                        {authMode === 'login' ? 'Sign In' : 'Create Account'}
                                    </button>
                                </div>
                            </form>
                            <div className="mt-4 text-center">
                                <button
                                    onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                                    className="text-green-600 hover:text-green-700 text-sm"
                                >
                                    {authMode === 'login' ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            };

            const AdminModal = () => {
                const [password, setPassword] = useState('');

                const handleAdminLogin = (e) => {
                    e.preventDefault();
                    if (password === 'bookworm123') {
                        setIsAdmin(true);
                        setShowAdminLogin(false);
                        setPassword('');
                    } else {
                        alert('Invalid admin password');
                    }
                };

                if (!showAdminLogin) return null;

                return (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4">
                            <h2 className="text-xl font-bold mb-4">Admin Login</h2>
                            <form onSubmit={handleAdminLogin}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Admin Password</label>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div className="flex space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowAdminLogin(false)}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="flex-1 btn-primary">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                );
            };

            // Main render logic
            return (
                <div>
                    {currentView === 'home' && <HomePage />}
                    {currentView === 'about' && <AboutPage />}
                    {currentView === 'challenges' && <ChallengesPage />}
                    <AuthModal />
                    <AdminModal />
                </div>
            );
        }

        ReactDOM.render(<BookBridge />, document.getElementById('root'));
    </script>
</body>
</html>
