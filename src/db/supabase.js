import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nekpeywnfddgehftmquk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5la3BleXduZmRkZ2VoZnRtcXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NTI1NDEsImV4cCI6MjA2NDAyODU0MX0.GfQkkw_mNfT_nrDBozkf0TN1WZEI2NyCYLgL0aQthMQ";

export const supabase = createClient(supabaseUrl, supabaseKey);