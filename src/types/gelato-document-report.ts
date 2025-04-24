import { Address, External$Address, Schemas$Address } from "./address";
import {
  External$GelatoDataDocumentReportDateOfBirth,
  GelatoDataDocumentReportDateOfBirth,
  Schemas$GelatoDataDocumentReportDateOfBirth,
} from "./gelato-data-document-report-date-of-birth";
import {
  External$GelatoDataDocumentReportExpirationDate,
  GelatoDataDocumentReportExpirationDate,
  Schemas$GelatoDataDocumentReportExpirationDate,
} from "./gelato-data-document-report-expiration-date";
import {
  External$GelatoDataDocumentReportIssuedDate,
  GelatoDataDocumentReportIssuedDate,
  Schemas$GelatoDataDocumentReportIssuedDate,
} from "./gelato-data-document-report-issued-date";
import {
  External$GelatoDocumentReportError,
  GelatoDocumentReportError,
  Schemas$GelatoDocumentReportError,
} from "./gelato-document-report-error";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Result from a document check
 */
export type GelatoDocumentReport = {
  address?: Address | undefined;
  /**
   * Point in Time
   */
  dob?: GelatoDataDocumentReportDateOfBirth | undefined;
  error?: GelatoDocumentReportError | undefined;
  /**
   * Point in Time
   */
  expirationDate?: GelatoDataDocumentReportExpirationDate | undefined;
  /**
   * Array of [File](https://stripe.com/docs/api/files) ids containing images for this document.
   */
  files?: string[] | null | undefined;
  /**
   * First name as it appears in the document.
   */
  firstName?: string | null | undefined;
  /**
   * Point in Time
   */
  issuedDate?: GelatoDataDocumentReportIssuedDate | undefined;
  /**
   * Issuing country of the document.
   */
  issuingCountry?: string | null | undefined;
  /**
   * Last name as it appears in the document.
   */
  lastName?: string | null | undefined;
  /**
   * Document ID number.
   */
  number?: string | null | undefined;
  /**
   * Status of this `document` check.
   */
  status: "unverified" | "verified";
  /**
   * Type of the document.
   */
  type?: ("driving_license" | "id_card" | "passport") | null | undefined;
};

/**
 * @internal
 * GelatoDocumentReport without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoDocumentReport = {
  address?: External$Address | undefined;
  dob?: External$GelatoDataDocumentReportDateOfBirth | undefined;
  error?: External$GelatoDocumentReportError | undefined;
  expiration_date?: External$GelatoDataDocumentReportExpirationDate | undefined;
  files?: string[] | null | undefined;
  first_name?: string | null | undefined;
  issued_date?: External$GelatoDataDocumentReportIssuedDate | undefined;
  issuing_country?: string | null | undefined;
  last_name?: string | null | undefined;
  number?: string | null | undefined;
  status: "unverified" | "verified";
  type?: ("driving_license" | "id_card" | "passport") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoDocumentReport
 */
const SchemaIn$GelatoDocumentReport: z.ZodType<
  GelatoDocumentReport, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in.optional(),
    dob: Schemas$GelatoDataDocumentReportDateOfBirth.in.optional(),
    error: Schemas$GelatoDocumentReportError.in.optional(),
    expiration_date:
      Schemas$GelatoDataDocumentReportExpirationDate.in.optional(),
    files: z.array(z.string()).nullable().optional(),
    first_name: z.string().nullable().optional(),
    issued_date: Schemas$GelatoDataDocumentReportIssuedDate.in.optional(),
    issuing_country: z.string().nullable().optional(),
    last_name: z.string().nullable().optional(),
    number: z.string().nullable().optional(),
    status: z.enum(["unverified", "verified"]),
    type: z
      .enum(["driving_license", "id_card", "passport"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      dob: "dob",
      error: "error",
      expiration_date: "expirationDate",
      files: "files",
      first_name: "firstName",
      issued_date: "issuedDate",
      issuing_country: "issuingCountry",
      last_name: "lastName",
      number: "number",
      status: "status",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoDocumentReport
 */
const SchemaOut$GelatoDocumentReport: z.ZodType<
  External$GelatoDocumentReport, // output type of this zod object
  z.ZodTypeDef,
  GelatoDocumentReport // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out.optional(),
    dob: Schemas$GelatoDataDocumentReportDateOfBirth.out.optional(),
    error: Schemas$GelatoDocumentReportError.out.optional(),
    expirationDate:
      Schemas$GelatoDataDocumentReportExpirationDate.out.optional(),
    files: z.array(z.string()).nullable().optional(),
    firstName: z.string().nullable().optional(),
    issuedDate: Schemas$GelatoDataDocumentReportIssuedDate.out.optional(),
    issuingCountry: z.string().nullable().optional(),
    lastName: z.string().nullable().optional(),
    number: z.string().nullable().optional(),
    status: z.enum(["unverified", "verified"]),
    type: z
      .enum(["driving_license", "id_card", "passport"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      dob: "dob",
      error: "error",
      expirationDate: "expiration_date",
      files: "files",
      firstName: "first_name",
      issuedDate: "issued_date",
      issuingCountry: "issuing_country",
      lastName: "last_name",
      number: "number",
      status: "status",
      type: "type",
    });
  });

export const Schemas$GelatoDocumentReport = {
  in: SchemaIn$GelatoDocumentReport,
  out: SchemaOut$GelatoDocumentReport,
};
