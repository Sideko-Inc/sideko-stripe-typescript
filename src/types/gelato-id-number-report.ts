import {
  External$GelatoDataIdNumberReportDate,
  GelatoDataIdNumberReportDate,
  Schemas$GelatoDataIdNumberReportDate,
} from "./gelato-data-id-number-report-date";
import {
  External$GelatoIdNumberReportError,
  GelatoIdNumberReportError,
  Schemas$GelatoIdNumberReportError,
} from "./gelato-id-number-report-error";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Result from an id_number check
 */
export type GelatoIdNumberReport = {
  /**
   * Point in Time
   */
  dob?: GelatoDataIdNumberReportDate | undefined;
  error?: GelatoIdNumberReportError | undefined;
  /**
   * First name.
   */
  firstName?: string | null | undefined;
  /**
   * ID number. When `id_number_type` is `us_ssn`, only the last 4 digits are present.
   */
  idNumber?: string | null | undefined;
  /**
   * Type of ID number.
   */
  idNumberType?: ("br_cpf" | "sg_nric" | "us_ssn") | null | undefined;
  /**
   * Last name.
   */
  lastName?: string | null | undefined;
  /**
   * Status of this `id_number` check.
   */
  status: "unverified" | "verified";
};

/**
 * @internal
 * GelatoIdNumberReport without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoIdNumberReport = {
  dob?: External$GelatoDataIdNumberReportDate | undefined;
  error?: External$GelatoIdNumberReportError | undefined;
  first_name?: string | null | undefined;
  id_number?: string | null | undefined;
  id_number_type?: ("br_cpf" | "sg_nric" | "us_ssn") | null | undefined;
  last_name?: string | null | undefined;
  status: "unverified" | "verified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoIdNumberReport
 */
const SchemaIn$GelatoIdNumberReport: z.ZodType<
  GelatoIdNumberReport, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dob: Schemas$GelatoDataIdNumberReportDate.in.optional(),
    error: Schemas$GelatoIdNumberReportError.in.optional(),
    first_name: z.string().nullable().optional(),
    id_number: z.string().nullable().optional(),
    id_number_type: z
      .enum(["br_cpf", "sg_nric", "us_ssn"])
      .nullable()
      .optional(),
    last_name: z.string().nullable().optional(),
    status: z.enum(["unverified", "verified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
      error: "error",
      first_name: "firstName",
      id_number: "idNumber",
      id_number_type: "idNumberType",
      last_name: "lastName",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoIdNumberReport
 */
const SchemaOut$GelatoIdNumberReport: z.ZodType<
  External$GelatoIdNumberReport, // output type of this zod object
  z.ZodTypeDef,
  GelatoIdNumberReport // the object to be transformed
> = z
  .object({
    dob: Schemas$GelatoDataIdNumberReportDate.out.optional(),
    error: Schemas$GelatoIdNumberReportError.out.optional(),
    firstName: z.string().nullable().optional(),
    idNumber: z.string().nullable().optional(),
    idNumberType: z.enum(["br_cpf", "sg_nric", "us_ssn"]).nullable().optional(),
    lastName: z.string().nullable().optional(),
    status: z.enum(["unverified", "verified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
      error: "error",
      firstName: "first_name",
      idNumber: "id_number",
      idNumberType: "id_number_type",
      lastName: "last_name",
      status: "status",
    });
  });

export const Schemas$GelatoIdNumberReport = {
  in: SchemaIn$GelatoIdNumberReport,
  out: SchemaOut$GelatoIdNumberReport,
};
