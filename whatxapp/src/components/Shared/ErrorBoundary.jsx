const ErrorBoundary = ({ children }) => {
    try {
        return children;
    } catch (error) {
        console.error(error);
        return <div>Something went wrong</div>;
    }
};

return (
    <ErrorBoundary>
        <Router>
            <ThemeProvider theme={theme}>
                {/* Rest of the code */}
            </ThemeProvider>
        </Router>
    </ErrorBoundary>
);
