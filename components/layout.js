import Link from 'next/link'
import Head from 'next/head'
import login from '../pages/login'



export default ({ children, title = 'This is the default title' }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link
                rel="stylesheet"
                href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
            />
        </Head>

        <header>
            <nav>
                <Link href='/'><a>Home</a></Link> |
        <Link href='/about'><a>About</a></Link> |
        <Link href='/contact'><a>Contact</a></Link> |
        <Link href='/login'><a>Login</a></Link>
            </nav>
        </header>

        {children}

        <footer>
            {'I`m here to stay'}
        </footer>
    </div>
)