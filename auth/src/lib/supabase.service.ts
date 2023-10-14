import { Injectable } from '@angular/core';
import {createClient, SupabaseClient} from '@supabase/supabase-js'
import {SUPABASE_KEY,SUPABASE_URL} from "@presents/utils";


@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  supabase:SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY)
}
