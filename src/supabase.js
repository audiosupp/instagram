import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dsrweebolpprswxqnznb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzcndlZWJvbHBwcnN3eHFuem5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwOTI4OTEsImV4cCI6MjAyNjY2ODg5MX0.s-MH2MvvFC_XVK4qWwIRfcyIKVD69WMHjCB4yRQ78ac'
export const supabase = createClient(supabaseUrl, supabaseKey)