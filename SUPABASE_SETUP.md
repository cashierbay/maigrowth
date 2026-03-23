# Supabase Setup Guide

## Step 1: Create Supabase Project
1. Go to https://supabase.com
2. Sign up / Log in
3. Click "New Project"
4. Fill in details (Project name, Password, Region)
5. Wait for it to be created (~2 mins)

## Step 2: Create Table
1. Go to "SQL Editor" in Supabase dashboard
2. Click "New Query"
3. Copy and paste this SQL:

```sql
create table contact_submissions (
  id bigint primary key generated always as identity,
  name varchar(255) not null,
  email varchar(255) not null,
  company varchar(255),
  website varchar(255),
  service varchar(100),
  message text,
  created_at timestamp default now()
);

-- Enable Row Level Security
alter table contact_submissions enable row level security;

-- Allow anonymous inserts
create policy "allow_insert" on contact_submissions
  for insert with check (true);

-- Allow reads only from your IP (optional, for admin page)
create policy "allow_select" on contact_submissions
  for select using (true);
```

4. Click "Run"

## Step 3: Get Your Keys
1. Go to "Settings" → "API"
2. Copy your:
   - **Project URL** (looks like: https://xxxxx.supabase.co)
   - **anon public key** (long string starting with eyJ...)

## Step 4: Add to .env.local
Create a `.env.local` file in your project root:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Done! The app will now use Supabase instead of Express.
