import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

interface SupabaseAdminLoginProps {
  onLogin: () => void;
}

export default function SupabaseAdminLogin({ onLogin }: SupabaseAdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRecovery, setIsRecovery] = useState(false);

  // Get the correct redirect URL based on environment
  const getRedirectUrl = () => {
    const currentUrl = window.location.origin;
    return `${currentUrl}/admin`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const supabase = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          redirectTo: getRedirectUrl(),
        },
      });

      if (isRecovery) {
        // Password recovery flow
        const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: getRedirectUrl(),
        });
        if (resetError) {
          setError(resetError.message);
        } else {
          setError('');
          alert('Password reset link sent to your email. Check your inbox.');
        }
      } else {
        // Sign in flow
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) {
          setError(signInError.message);
          return;
        }

        if (data.session) {
          // Store session in localStorage
          localStorage.setItem('adminSession', JSON.stringify(data.session));
          onLogin();
        }
      }
    } catch (err) {
      setError('Authentication failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="font-bold text-3xl text-gray-900 mb-2">Admin Access</h1>
        <p className="text-gray-600 mb-6">Sign in with your Supabase account</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          
          {!isRecovery && (
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
          )}
          
          {error && (
            <p className="text-red-600 text-sm mb-4">{error}</p>
          )}
          
          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50"
          >
            {loading ? (isRecovery ? 'Sending...' : 'Signing in...') : (isRecovery ? 'Send Recovery Link' : 'Sign In')}
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            {isRecovery ? (
              <button 
                type="button"
                onClick={() => { setIsRecovery(false); setError(''); }}
                className="text-blue-600 hover:underline"
              >
                Back to sign in
              </button>
            ) : (
              <button 
                type="button"
                onClick={() => { setIsRecovery(true); setError(''); }}
                className="text-blue-600 hover:underline"
              >
                Forgot your password?
              </button>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
