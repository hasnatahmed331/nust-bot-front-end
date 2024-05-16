import { useState } from 'react';
import API_BASE_URL from "@/config"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { toast } from "sonner"

import './PdfInput.css';

const PdfInput = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
            alert('Please select a PDF file.');
        }
    };

    const submitFile = async (selectedFile) => {

        if (!selectedFile) {
          toast("Please Select a PDF file.");
          return;
        }
      
        // try {
        //   const formData = new FormData();
        //   formData.append('docs', selectedFile);
      
        //   const response = await fetch(`${API_BASE_URL}/embed/`, {
        //     method: 'POST',
        //     body: formData
        //   });
      
        //   if (!response.ok) {
        //     throw new Error('Failed to submit file');
        //   }
      
        //   const data = await response.json();
        //   console.log(data.message); 
        // } catch (error) {
        //   console.error('Error submitting file:', error);
          
        // }

        toast("File Submitted Successfully");
      };
      

    return (
   
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Document</Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px]">
        
        <DialogHeader>
          <DialogTitle>Add New Document</DialogTitle>
          <DialogDescription>
            Upload a new PDF document to add in Knowledge Base.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            
            <Label htmlFor="fileInput" className="text-right">
              PDF Input
            </Label>

            <Input
              id="fileInput"
              className="col-span-3"
              type="file"
              onChange={handleFileChange}
            />

          </div>
        </div>
        
        <DialogFooter>

          <Button onClick={() => submitFile(selectedFile)} >Submit</Button>

          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Back
            </Button>
          </DialogClose>

        </DialogFooter>
      </DialogContent>

    </Dialog>
     
    );
};

export default PdfInput;